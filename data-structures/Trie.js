var TrieNode = function(char) {
  this.char = char;
  this.children = {};
  this.isWord = false;
}

TrieNode.prototype.getChild = function(char) {
  return this.children[char];
}

var Trie = function() {
  this.root = new TrieNode('*');
}

Trie.prototype.add = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    let next = current.getChild(c);
    if (!next) {
      next = new TrieNode(c);
      current.children[c] = next;
    }
    current = next;
  }
  current.isWord = true;
}

Trie.prototype.find = function(str) {
  const result = [];
  let current = this.root;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    let next = current.getChild(c);
    if (!next) return result;
    current = next;
  }
  _findPath(current, [], result);
  return result.map(function(arr) {
    return arr.slice(1, arr.length).join('');
  });
}

function _findPath(node, path, result) {
  if (!node) return;
  if (node.isWord) {
    path.push(node.char);
    result.push(path.slice());
  }
  // avoid duplicated char 
  if (!node.isWord) {
    path.push(node.char);
  }
  for (let c in node.children) {
    _findPath(node.children[c], path, result);
    path.pop();
  }
}

var trie = new Trie();
trie.add('hack');
trie.add('hace');
trie.add('hackerrank');

console.log(trie.find('hack'));
console.log(trie.find('hac'));
console.log(trie.find('hak'));