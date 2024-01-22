from app import app
from utils.db import db

with app.app_context():
    db.create_all()


# this only runs if `$ python index.py` is executed
if __name__ == "__main__":
    # PORT = int(os.environ.get('PORT', 3001))
    app.run(host="0.0.0.0", port="3001", debug=True)

