from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from models.todo import Todo
from utils.db import db

todos = Blueprint("todos", __name__)


# busca todos los todos y los envia a index.html para mostrarlos
@todos.route("/", methods=[ "GET" ])
def get_todos():
    todos = Todo.query.all()
    todos_serialize = list(map(lambda x: x.serialize(), todos))
    # return render_template("index.html", todos=todos)
    return jsonify({'estos son los todos': todos_serialize})


@todos.route("/addTodo", methods=[ "POST" ])
def add_todo():
    # todoTitle = request.form["todoTitle"]
    # tag = request.form["tag"]
    body = request.get_json()
    if body["tag"] != None: 
        tag = body["tag"]
    tag = None
    todoTitle = body["todoTitle"]
    
    new_todo = Todo(todoTitle=todoTitle, done=False, archived=False, tag=tag)

    db.session.add(new_todo)
    db.session.commit()
    # flash("todo added succesfully!")
    # print(todo_serialize)
    # return redirect("/"), jsonify({todo_serialize})
    return jsonify(new_todo.serialize())

# saca los datos enviados en el formulario y los guarda en la base de datos (junto a done y archived que se ocuparan despues)


@todos.route("/todo/<int:todoId>", methods=["POST", "GET"])
def update_todo(todoId):
    todo = Todo.query.get(todoId)

    if request.method == "POST":
        # todo.todoTitle = request.form["todoTitle"]
        # todo.tag = request.form["tag"]
        body = request.get_json()
        if body["tag"] != None: 
            todo.tag = body["tag"]
        todo.todoTitle = body["todoTitle"]

        db.session.commit()
        # flash("todo updated succesfully!")
        # return redirect(url_for("todos.index")), jsonify({todo})
        return todo.serialize()
    
    return jsonify(todo.serialize())


@todos.route("/deleteTodo/<int:todoId>",  methods=["DELETE"])
def delete_todo(todoId):
    todo = Todo.query.get(todoId)
    db.session.delete(todo)
    db.session.commit()

    flash("todo deleted succesfully!")

    return redirect(url_for("todos.index"))


# redirecciona a la función index de este mismo archivo en vez de a '/' poner metodo , methods=['DELETE']?
