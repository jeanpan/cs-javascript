var Stack = function() {
  this._stack = [];
}

Stack.prototype.push = function(item) {
  this._stack.push(item);
}

Stack.prototype.pop = function() {
  return this._stack.pop();
}

Stack.prototype.isEmpty = function() {
  return this._stack.length === 0;
}

Stack.prototype.peek = function() {
  return this._stack[this._stack.length - 1];
}

Stack.prototype.size = function() {
  return this._stack.length;
}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(4);
stack.push(5);
console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.peek());
stack.push(6);
console.log(stack.peek());
console.log(stack.size());