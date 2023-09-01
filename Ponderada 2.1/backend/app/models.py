from pydantic import BaseModel, Field, EmailStr

class ProdutoSchema(BaseModel):
    id : int = Field(default=None, gt=0)
    Name: str = Field(default=None)
    Price: str = Field(default=None)
    # Configuração criada para documentação do modelo
    class Config:
        schema_extra = {
            "post_teste" : {
                "Name": "Nome do produto",
                "Price": "Preço do produto",
            }
        }

# Classe para representar os usuários do sistema
class UserSchema(BaseModel):
    id : int = Field(default=None, gt=0)
    Email : EmailStr = Field(default=None)
    password : str = Field(default=None)
    class Config:
        schema_extra = {
            "schema_user" : {
                "Email": "teste@mail.com",
                "password":"123"
            }
        }
# Classe para o login dos usuários
class LoginUserSchema(BaseModel):
    Email : EmailStr = Field(default=None)
    password : str = Field(default=None)
    class Config:
        schema_extra = {
            "user_teste" : {
                "Email": "teste@mail.com",
                "password":"123"
            }
        }