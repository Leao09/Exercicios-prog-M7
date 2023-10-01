from fastapi import APIRouter, Body
from auth.jwt_handler import signJWT
from models import Users 
from db import database, User 

app = APIRouter()

@app.post("/users")
async def login(data: Users):
    if not database.is_connected:
        await database.connect()

    await User.objects.create(email= data.email, password= data.password)

    return signJWT()


@app.get("/users")
async def read_users():
    if not database.is_connected:
        await database.connect()
    
    return await User.objects.all()

