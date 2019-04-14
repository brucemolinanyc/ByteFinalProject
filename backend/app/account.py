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
        self.set_password(self.password_hash)
        
    def set_password(self, password):
        hashed_pw = hash_password(password)
        self.password_hash = hashed_pw 

    @classmethod
    def login(cls, username, password):
        return cls.select_one_where("WHERE username = ? AND password_hash = ?", 
                                   (username, hash_password(password)))

                                   