/**
 * Keep track of the subsets in a 1D array
 * Naive approach
 */

var UnionFind = function(n) {
  this._parent = new Array(n);
  this._parent.fill(-1);
}

UnionFind.prototype.find = function(v) {
  let x = v;
  while (this._parent[x] !== -1 
      && this._parent[x] !== x) {
    x = this._parent[x];
  }
  return x;
}

UnionFind.prototype.union = function(x, y) {
  let a = this.find(x);
  let b = this.find(y);
  this._parent[a] = b;
}

UnionFind.prototype.hasCycle = function() {
  for (let i = 0; i < this._parent.length; i++) {
    if (i === this._parent[i]) return true;
  }
  return false;
}

let u = new UnionFind(3);
u.union(0, 1);
u.union(1, 2);
// u.union(0, 2);
console.log(u.hasCycle());
