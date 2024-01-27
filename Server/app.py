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

# buscar como iniciar venv y probar link backend en url buscador ...ruta env src c windows win 32 etc
# 26-01 el entorno virtual esta creado en la carpeta server, para activarlo usar el comando venv\Scripts\activate

# this only runs if `$ python app.py` is executed
# if __name__ == "__main__":
#     # PORT = int(os.environ.get('PORT', 3001))
#     app.run(host="0.0.0.0", port="3001", debug=True)
