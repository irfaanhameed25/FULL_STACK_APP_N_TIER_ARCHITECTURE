from app.repositories.user_repo import UserRepository
from app.schemas.user_schemas import UserCreate

class UserService:
    @staticmethod
    def register_user(user_data: UserCreate):
        # Business logic: Format name to capitalize first letters
        formatted_name = user_data.name.strip().title()
        return UserRepository.create_user(formatted_name)

    @staticmethod
    def list_users():
        return UserRepository.get_users()