from fastapi import APIRouter, Depends
from models import StartupSchema, inputModel
from auth.jwt_bearer import jwtBearer
from db import database, Startup
import httpx

app = APIRouter()

@app.post("/predict")
async def predict(data:inputModel):
     
    async with httpx.AsyncClient() as client:
        response = await client.post("http://localhost:8001/predict",json=data)
            
    print(response)
    data = response.json()
    print(data)

    return {"message": "Chamada para o backend B bem-sucedida", "data": data}


@app.get("/startups")
async def read_startup():
    if not database.is_connected:
        await database.connect()

    response = await Startup.objects.all()

    
    return response

@app.post("/startups", dependencies=[Depends(jwtBearer())])
async def create_startup(data: StartupSchema):
    if not database.is_connected:
        await database.connect()
    
    print(data)
    inputModel = {
            "field_0": data.field_0,
            "field_1": data.field_1,
            "field_2": data.field_2,
            "field_3": data.field_3,
            "field_4": data.field_4,
            "field_5": data.field_5,
            "Faturamento": data.Faturamento,
         }

    print(data)
    response = await predict(inputModel)
    print(response)
    predicted = response["data"]["prediction"]
    await Startup.objects.create(Name= data.Name, Status= predicted)
    
    return {"success": "Successfully created"}

@app.delete("/startups/{id}")
async def delete(id:int):
    if not database.is_connected:
        await database.connect()

    return await Startup.objects.delete(id=id)