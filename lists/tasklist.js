"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tasknode_1 = require("./tasknode");
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.idCounter = 1;
        this.head = null;
        this.tail = null;
    }
    TaskList.prototype.addTask = function (title, completed) {
        if (completed === void 0) { completed = false; }
        // Crear nodo.
        var newNode = new tasknode_1.TaskNode(this.idCounter, title, completed);
        // Actualizar contador.
        this.idCounter = this.idCounter + 1;
        if (this.head === null) {
            // la lista está vacía.
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    };
    TaskList.prototype.removeTask = function (id) { return false; };
    TaskList.prototype.listTasks = function () {
        if (this.head === null) {
            console.log('La lista está vacía');
            return;
        }
        var current = this.head;
        while (current !== null) {
            console.log("".concat(current.id, " - ").concat(current.title, ": ").concat(current.completed));
            current = current.next;
        }
    };
    TaskList.prototype.updateTask = function (id) {
        // buscar la lista
        try {
            if (this.head === null) {
                throw new Error('La lista está vacía');
            }
            var current = this.head;
            while (current !== null) {
                if (current.id === id) {
                    // if (current.completed) {
                    //   current.completed = false;
                    // } else {
                    //   current.completed = true;
                    // }
                    current.completed = current.completed ? false : true;
                    // current.completed = current.completed!
                    return current.completed;
                }
                current = current.next;
            }
            throw new Error("No se encontró el elemento");
            return false;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    return TaskList;
}());
// 1. Crear la lista
var list = new TaskList();
// 2. Agregar la primer tarea.
list.addTask('Primer tarea', false);
// 3. Listar  (se debe ver 1 sola tarea).
list.listTasks(); // '1 - Primer tarea - false'
// 4. Agregar 2 tareas.
console.log('-----');
list.addTask('Segunda tarea');
list.addTask('Lavar los trastes');
// 5. Listar (se deben ver 3 tareas).
list.listTasks();
// 6. Actualizar tarea
list.updateTask(2);
// 7. listar 
console.log('-----');
list.listTasks();
