import hashlib, uuid, random
import requests

salt = "MYSALT"  # generates a random uuid
encoded_salt = salt.encode() 


def hash_password(password):
    """ WEEK 4 TODO: encrypt with sha512 & a salt """
    print(password)
    input()
    encoded_pw = password.encode()
    hashed_pw = hashlib.sha512(encoded_pw + encoded_salt).hexdigest()
    print(hashed_pw)
    input()
    return hashed_pw
