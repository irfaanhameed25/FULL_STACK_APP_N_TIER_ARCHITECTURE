from fastapi import APIRouter
from typing import List
from app.schemas.user_schemas import UserCreate, UserResponse
from app.services.user_service import UserService

router = APIRouter()

@router.post("/", response_model=UserResponse)
def create_user(user: UserCreate):
    return UserService.register_user(user)

@router.get("/", response_model=List[UserResponse])
def get_users():
    return UserService.list_users()