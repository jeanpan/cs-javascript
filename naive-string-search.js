function String(str) {
  this.str = str;
}
// Naive String Search
String.prototype.indexOf = function(pattern) {
  const str = this.str;
  if (pattern.length > str.length) return -1;
  for (let i = 0; i < str.length; i++) {
    let j = i;
    let found = true;
    for (let x = 0; x < pattern.length; x++) {
      if (pattern[x] === str[j]) {
        j += 1;
      } else {
        found = false;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}

const s = 'HERE IS A SIMPLE EXAMPLE';
const pattern = 'EXAMPLE';

const str = new String(s);
const index = str.indexOf(pattern);
console.log(index);
console.log(s[index]);