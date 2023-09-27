from pydantic import BaseModel, Field

class StartupSchema(BaseModel):
    id : int = Field(default=None, gt=0)
    Name: str = Field(default=None)
    # Configuração criada para documentação do modelo
    class Config:
        schema_extra = {
            "post_teste" : {
                "Name": "Nome da startup",
                "Status": "Status da startup",
            }
        }

class inputModel(BaseModel):
    field_0: float
    field_1: float
    field_2: float
    field_3: float
    field_4: float
    field_5: float
    Faturamento: float