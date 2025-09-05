import { StackNode } from "./stacknode";

class Stack {
  head: StackNode | null;
  tail: StackNode | null;

  constructor() {
    this.head = null;
  }

  push(value:number) {
    const newNode = new StackNode(value);
    newNode.next = this.head;
    this.head = newNode;
    console.log(`Push: ${value}`);
  }

  pop(): StackNode | null {
    if (this.head === null) {
  console.log('La pila está vacía');
  return null;
  }

  const poppedNode: StackNode = this.head;
  this.head = this.head.next;
  console.log(`Pop: ${poppedNode.value}`);
  return poppedNode;
  }

  list(): void {
    if (this.head === null) {
      console.log('La pila está vacía');
      return;
    }
    let current: StackNode | null = this.head;
    console.log('Pila actual:');
    while (current !== null) {
      console.log(`Nodo(s) en la pila con valor: ${current.value}`);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.list();
