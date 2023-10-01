from fastapi import FastAPI
from routes.startup import app as startup_router
from routes.user import app as user_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = ["*"]

app.add_middleware( 
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(startup_router)
app.include_router(user_router)
