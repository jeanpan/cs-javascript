/**
 * TrieNode
 * @param {*} char 
 */
var TrieNode = function(char) {
  this.char = char;
  this.parent = null;
  this.children = {};
  this.isWord = false;
  this.count = 0;
}

TrieNode.prototype.getChild = function(char) {
  if (char in this.children === false) return null;
  return this.children[char];
}

/**
 * Trie
 * Both add & contain time complexities are O(m), which m is the length of word
 * However, Tire space requirement is O(ALPHABET_SIZE * word_length * number_of_word)
 */
var Trie = function() {
  this.root = new TrieNode('*');
  this.wordCount = 0;
}

// Time: O(m), m: the length of the word.
Trie.prototype.add = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    let next = current.getChild(c);
    if (!next) {
      next = new TrieNode(c);
      current.children[c] = next;
    }
    next.parent = current;
    next.count += 1;
    current = next;
  }
  current.isWord = true;
  this.wordCount += 1;
}

// Time: O(m), m: the length of the word.
Trie.prototype.contain = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    let next = current.getChild(c);
    if (!next) return false;
    current = next;
  }
  if (current && current.isWord) return true;
  return false;
}

Trie.prototype.remove = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    let next = current.getChild(c);
    if (!next) return null;
    next.count -= 1;
    current = next;
  }
  if (current && current.isWord) {
    current.isWord = false;
  }
  _deleteNodes(current);
}

// traverse backward to delete count as 0 nodes. 
function _deleteNodes(node) {
  let current = node;
  let lastChar = current.char;
  while (current.char !== '*') {
    current = current.parent;
    if (current.children[lastChar].count === 0) {
      delete current.children[lastChar];
    }
    lastChar = current.char;
  }
}

Trie.prototype.search = function(str) {
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
trie.add('abc');

// console.log(trie.contain('abc'));
// console.log(trie.contain('hace'));
// console.log(trie.contain('ab'));
console.log(trie);
trie.remove('abc');
trie.remove('hack');
console.log(trie.contain('abc'));
console.log(trie.contain('hack'));
console.log(trie.contain('hace'));
console.log(trie.contain('hackerrank'));
console.log(trie);
