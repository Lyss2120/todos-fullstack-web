from flask import Flask
from routes.todos import todos
from utils.db import db

app = Flask(__name__)

# para crear una sesion
app.secret_key = "secret key"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:root@127.0.0.1/todosdb"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

app.register_blueprint(todos)

# activar venv ==>   venv\Scripts\activate.bat 

