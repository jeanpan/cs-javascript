var Queue = function() {
  this._queue = [];
}

Queue.prototype.enqueue = function(item) {
  this._queue.push(item);
}

Queue.prototype.dequeue = function() {
  return this._queue.shift();
}

Queue.prototype.isEmpty = function() {
  return this._queue.length === 0;
}

Queue.prototype.size = function() {
  return this._queue.length;
}

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(4);
console.log(queue.size());
queue.enqueue(5);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
