from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'


from flask_app import routes
