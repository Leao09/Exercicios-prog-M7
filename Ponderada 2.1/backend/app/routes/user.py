from fastapi import APIRouter, Depends, Body
from app.auth.jwt_handler import signJWT
from app.db import database, User
from app.models import UserSchema, LoginUserSchema

app = APIRouter(tags=["user"])


# return all users
@app.get("/", tags=["user"])
async def read_users():
    if not database.is_connected:
        await database.connect()
        
    return await User.objects.all()

# create a user
@app.post("/signup", tags=["user"])
async def sign_up(user: UserSchema = Body(default=None)):
    if not database.is_connected:
        await database.connect()
        
    await User.objects.create(Email=user.Email,
                              password=user.password)
    return signJWT()

# Função que verifica os dados do usuário
async def check_user(data: LoginUserSchema):
    if not database.is_connected:
        await database.connect()
    
    users = await User.objects.all()
    for user in users:
        if user.Email == data.Email and user.password == data.password:
            return True
    return False

# Recebe uma requisição do POST para logar um usuário
@app.post("/login", tags=["user"])
async def user_login(user: UserSchema = Body(default=None)):        
    if check_user(user):
        return signJWT()
    return {"error": "Dados inválidos"}