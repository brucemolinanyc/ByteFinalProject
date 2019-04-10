from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['SECRET_KEY'] = 'thisissecret'

from flask_app import routes
