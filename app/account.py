import sqlite3
from app.orm import ORM
from app.util import hash_password

class Account(ORM):
    tablename = "accounts"
    fields = ["username", "password_hash"]

    def __init__(self, *args, **kwargs):
            self.pk = kwargs.get('pk')
            self.username = kwargs.get('username')
            self.password_hash = kwargs.get('password_hash')
  
    def set_password(self, password):
        print(password)
        input()
        hashed_pw = hash_password(password)
        print(hashed_pw)
        input()
        self.password_hash = hashed_pw 
        return hashed_pw

  