from flask import jsonify, abort, request
from flask_app import app

UNAUTHORIZED = {"error": "unauthorized", "status_code": 401}
NOT_FOUND = {"error": "not found", "status_code": 404}
APP_ERROR = {"error": "application error", "status_code": 500}
BAD_REQUEST = {"error": "bad request", "status_code": 400}

@app.route('/', methods=['GET'])
def home():
    return jsonify({"test": "working"})