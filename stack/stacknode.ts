export class StackNode {
  value: number;
  next: StackNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
};
