export class QueueNode {
  value: number;
  next: QueueNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
};
