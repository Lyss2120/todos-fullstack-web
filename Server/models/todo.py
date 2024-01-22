from utils.db import db


class Todo(db.Model):
    todoId = db.Column(db.Integer, primary_key=True)
    todoTitle = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean, nullable=True)
    archived = db.Column(db.Boolean, nullable=True)
    tag = db.Column(db.String(120), nullable=True)

    def __init__(self, todoTitle, done, archived, tag):
        self.todoTitle = todoTitle
        self.done = done
        self.archived = archived
        self.tag = tag
        # return f"<Todo title {self.todoTitle}>"
