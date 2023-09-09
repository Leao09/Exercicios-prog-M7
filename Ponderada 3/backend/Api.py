from pydantic import BaseModel
import pandas as pd
from pycaret.classification import load_model, predict_model
from fastapi import FastAPI
import uvicorn

# Create the app
app = FastAPI()

# Load trained Pipeline
model = load_model("Api")

# Create input/output pydantic models
class ApiInput(BaseModel):
    field_0: float
    field_1: float
    field_2: float
    field_3: float
    field_4: float
    field_5: float
    Faturamento: float

class ApiOutput(BaseModel):
    prediction: float

# Define predict function
@app.post("/predict", response_model=ApiOutput)
def predict(data: ApiInput):
    data = pd.DataFrame([data.dict()])
    predictions = predict_model(model, data=data)
    prediction_value = predictions["prediction_label"].iloc[0]
    
    return {"prediction": prediction_value}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
