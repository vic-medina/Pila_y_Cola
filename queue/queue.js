"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queuenode_1 = require("./queuenode");
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new queuenode_1.QueueNode(value);
        if (this.head === null) { // La cola está vacía.
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        console.log("Encolando nodo con valor: ".concat(value));
    };
    Queue.prototype.dequeue = function () {
        if (this.head === null) {
            console.log('La cola está vacía');
            return null;
        }
        var dequeuedNode = this.head;
        this.head = this.head.next;
        // Si la cola quedó vacía, tail también debe ser null
        if (this.head === null) {
            this.tail = null;
        }
        console.log("Desencolando el elemento con valor: ".concat(dequeuedNode.value));
        return dequeuedNode;
    };
    Queue.prototype.listQueue = function () {
        if (this.head === null) {
            console.log('La cola está vacía');
            return;
        }
        var current = this.head;
        while (current !== null) {
            console.log("Nodo(s) en la cola con valor: ".concat(current.value));
            current = current.next;
        }
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.listQueue();
queue.dequeue();
queue.dequeue();
queue.listQueue();
