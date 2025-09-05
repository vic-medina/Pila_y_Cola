"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskNode = void 0;
var TaskNode = /** @class */ (function () {
    function TaskNode(id, title, completed) {
        if (completed === void 0) { completed = false; }
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.next = null;
    }
    return TaskNode;
}());
exports.TaskNode = TaskNode;
;
