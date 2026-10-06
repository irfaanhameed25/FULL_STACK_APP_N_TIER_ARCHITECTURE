# In-memory dictionary database mock
fake_db = {}
counter = 1

class UserRepository:
    @staticmethod
    def create_user(name: str):
        global counter
        user_id = counter
        user = {"id": user_id, "name": name}
        fake_db[user_id] = user
        counter += 1
        return user

    @staticmethod
    def get_users():
        return list(fake_db.values())