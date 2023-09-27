from fastapi import APIRouter, Body
from models import StartupSchema, inputModel
from db import database, Startup
import httpx

app = APIRouter()

@app.post("/predict")
async def predict(data:inputModel):
     
    async with httpx.AsyncClient() as client:
        response = await client.post("http://localhost:8001/predict",json=data.dict())
            
    print(response)
    data = response.json()
    print(data)

    return {"message": "Chamada para o backend B bem-sucedida", "data": data}


@app.get("/startups")
async def read_startup():
    if not database.is_connected:
        await database.connect()
    
    return await Startup.objects.all()

@app.post("/startups")
async def create_startup(data: inputModel):
    if not database.is_connected:
        await database.connect()
    
    print(data)
    response = await predict(data)
    print(response)
    predicted = response["data"]["prediction"]
    await Startup.objects.create(Name= "Leão", Status= predicted)
    
    return {"success": "Successfully created"}
