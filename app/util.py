import hashlib, uuid, random
import requests

salt = "MYSALT"  # generates a random uuid
encoded_salt = salt.encode() 


def hash_password(password):
    encoded_pw = password.encode()
    hashed_pw = hashlib.sha512(encoded_pw + encoded_salt).hexdigest()
    return hashed_pw
