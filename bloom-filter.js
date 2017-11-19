var BloomFilter = function(size, hashFuncs) {
  this._size = size || 1024;
  this._array = new Array(this._size);
  this._array.fill(0);
  this._hashFuncs = hashFuncs || [
    x => (x + 11) % this._size,
    x => (x + 13) % this._size,
    x => (x + 17) % this._size
  ];
}

BloomFilter.prototype.insert = function(value) {
  for (let f of this._hashFuncs) {
    let idx = f(value);
    this._array[idx] = 1;
  }
}

BloomFilter.prototype.query = function(value) {
  for (let f of this._hashFuncs) {
    let idx = f(value);
    if (!this._array[idx]) return false;
  }
  return true;
}

let bloomFilter = new BloomFilter();
bloomFilter.insert(12);
console.log(bloomFilter.query(10));