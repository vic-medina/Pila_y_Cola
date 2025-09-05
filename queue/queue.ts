import { QueueNode } from "./queuenode";

class Queue {
  head: QueueNode | null;
  tail: QueueNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: number) {
    const newNode = new QueueNode(value);

    if (this.head === null) { // La cola está vacía.
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = this.tail!.next;
    }
    console.log(`Encolando nodo con valor: ${value}`);
  } 

  dequeue(): QueueNode | null {
    if (this.head === null) {
        console.log('La cola está vacía');
        return null;
    }
    const dequeuedNode = this.head;
    this.head = this.head.next;
    // Si la cola quedó vacía, tail también debe ser null
    if (this.head === null) {
        this.tail = null;
    }
    console.log(`Desencolando el elemento con valor: ${dequeuedNode.value}`);
    return dequeuedNode;
  }

  listQueue(): void {
    if (this.head === null) {
      console.log('La cola está vacía');
      return;
    }
    let current: QueueNode | null = this.head;
    while (current !== null) {
      console.log(`Nodo(s) en la cola con valor: ${current.value}`);
      current = current.next;
    }
  }
}

const queue = new Queue();
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
