from fastapi import FastAPI
from database import engine, Base
from routers import surveys, responses  # Import routers
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Create tables
Base.metadata.create_all(bind=engine)

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains (change for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],
)

# Include routers
app.include_router(surveys.router, prefix="/api")  # ✅ Ensure prefix is "/api"
app.include_router(responses.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Survey API"}
