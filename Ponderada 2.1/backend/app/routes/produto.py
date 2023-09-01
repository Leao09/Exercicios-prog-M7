from fastapi import APIRouter, Depends, Body
from app.models import ProdutoSchema
from app.auth.jwt_bearer import jwtBearer
from app.db import database, Produto


app = APIRouter(tags=["Produto"])

# return all Produtos
@app.get("/produtos")
async def read_Produtos():
    if not database.is_connected:
        await database.connect()
        
    return await Produto.objects.all()
# return all Produtos by a user name

# create a Produto
@app.post("/produtos", dependencies=[Depends(jwtBearer())], tags=["Produto"])
async def create_Produto(produto: ProdutoSchema = Body(default=None)):
    if not database.is_connected:
        await database.connect()
        
    await Produto.objects.create(Name=produto.Name,
                              Price=produto.Price,)
    return {"success": "Successfully created"}

@app.put("/produtos", dependencies=[Depends(jwtBearer())])
async def update_Produto(new_Produto: ProdutoSchema):
    if not database.is_connected:
        await database.connect()
    return await Produto.objects.update_or_create(id=new_Produto.id,
                                     Name=new_Produto.Name,
                                     Price=new_Produto.Price,)
    
@app.delete("/produtos/{id}", dependencies=[Depends(jwtBearer())])
async def delete_Produto(id: int):
    if not database.is_connected:
        await database.connect()
        
    return await Produto.objects.delete(id=id)