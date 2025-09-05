"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stacknode_1 = require("./stacknode");
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
    }
    Stack.prototype.push = function (value) {
        var newNode = new stacknode_1.StackNode(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log("Push: ".concat(value));
    };
    Stack.prototype.pop = function () {
        if (this.head === null) {
            console.log('La pila está vacía');
            return null;
        }
        var poppedNode = this.head;
        this.head = this.head.next;
        console.log("Pop: ".concat(poppedNode.value));
        return poppedNode;
    };
    Stack.prototype.list = function () {
        if (this.head === null) {
            console.log('La pila está vacía');
            return;
        }
        var current = this.head;
        console.log('Pila actual:');
        while (current !== null) {
            console.log("Nodo(s) en la pila con valor: ".concat(current.value));
            current = current.next;
        }
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.list();
