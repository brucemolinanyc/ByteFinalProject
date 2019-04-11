from flask import jsonify, abort, request
from flask_app import app
from app.account import Account

UNAUTHORIZED = {"error": "unauthorized", "status_code": 401}
NOT_FOUND = {"error": "not found", "status_code": 404}
APP_ERROR = {"error": "application error", "status_code": 500}
BAD_REQUEST = {"error": "bad request", "status_code": 400}

@app.route('/', methods=['GET'])
def home():
    return jsonify({"test": "working"})

@app.route('/login', methods=['POST'])
def login():
    if not request.json or 'username' not in request.json or 'password' not in request.json:
        return jsonify(BAD_REQUEST), 401
    account = Account.login(request.json['username'], request.json['password'])
    if not account:
        return jsonify(UNAUTHORIZED), 401
    return jsonify({"login": "working"})
