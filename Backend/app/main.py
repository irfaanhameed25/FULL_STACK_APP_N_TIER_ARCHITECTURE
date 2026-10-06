import sys
from pathlib import Path

# Force Python to recognize 'Backend' as a source directory
sys.path.append(str(Path(__file__).resolve().parent.parent))


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import users

app = FastAPI(title="N-Tier In-Memory App")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])