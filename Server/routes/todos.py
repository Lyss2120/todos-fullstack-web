from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from models.todo import Todo
from utils.db import db

todos = Blueprint("todos", __name__)


@todos.route("/", methods=[ "GET" ])
def get_todos():
    todos = Todo.query.all()
    todos_serialize = list(map(lambda x: x.serialize(), todos))
    return jsonify({'estos son los todos': todos_serialize})


@todos.route("/addTodo", methods=[ "POST" ])
def add_todo():
    body = request.get_json()
    
    todoTitle = body["todoTitle"]
    tag = None
    tag = body["tag"]
    new_todo = Todo(todoTitle=todoTitle, done=False, archived=False, tag=tag)

    db.session.add(new_todo)
    db.session.commit()
    return jsonify(new_todo.serialize())


@todos.route("/todo/<int:todoId>", methods=["POST", "GET", "DELETE"])
def update_todo(todoId):
    todo = Todo.query.get(todoId)

    if request.method == "POST":
        body = request.get_json()
        # cambia ese valor solo si viene la modificación de tag 
        if "tag" in body : 
            todo.tag = body["tag"]
        todo.todoTitle = body["todoTitle"]

        db.session.commit()
        return jsonify("todo updated succesfully!", todo.serialize())
    
    if request.method == "DELETE":
        db.session.delete(todo)
        db.session.commit()
        return jsonify("todo deleted succesfully!", todo.serialize())
    
    # si es "GET"
    return jsonify(todo.serialize())


#### para mostrar los resultados de la api en html ####

# busca todos los todos y los envia a index.html para mostrarlos
# @todos.route("/", methods=[ "GET" ])
# def get_todos():
#     todos = Todo.query.all()
#     return render_template("index.html", todos=todos)

# @todos.route("/addTodo", methods=[ "POST" ])
# def add_todo():
#     todoTitle = request.form["todoTitle"]
#     if request.form["tag"] != None:
#         tag = request.form["tag"]
#     tag = None
   
#     new_todo = Todo(todoTitle=todoTitle, done=False, archived=False, tag=tag)
#     todo_serialize = new_todo.serialize()

#     db.session.add(new_todo)
#     db.session.commit()

#     flash("todo added succesfully!")
#     return redirect("/"), jsonify({todo_serialize})

# @todos.route("/todo/<int:todoId>", methods=["POST", "GET"])
# def update_todo(todoId):
#     todo = Todo.query.get(todoId)

#     if request.method == "POST":
#         todo.todoTitle = request.form["todoTitle"]
#         if request.form["tag"] != None:
#             todo.tag = request.form["tag"]
#         todo.tag = None
#         db.session.commit()
#         flash("todo updated succesfully!")
#         return redirect(url_for("todos.index"))
#     return jsonify(todo.serialize())
# saca los datos enviados en el formulario y los guarda en la base de datos (junto a done y archived que se ocuparan despues)

# @todos.route("/deleteTodo/<int:todoId>",  methods=["DELETE"])
# def delete_todo(todoId):
#     todo = Todo.query.get(todoId)
#     db.session.delete(todo)
#     db.session.commit()

#     flash("todo deleted succesfully!")

#     return redirect(url_for("todos.index"))


# redirecciona a la función index de este mismo archivo en vez de a '/' poner metodo , methods=['DELETE']?
