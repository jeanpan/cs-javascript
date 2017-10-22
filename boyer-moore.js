function String(str) {
  this.str = str;
}

// Boyer-Moore String Search
String.prototype.indexOf = function(pattern) {
  const str = this.str;
  const strLength = str.length;
  const patternLength = pattern.length;
  if (patternLength > strLength) return -1;
  // the last char index of pattern
  const p = patternLength - 1;
  let i = p;
  while (i < strLength) {
    const c = str[i];
    if (c === pattern[p]) {
      let q = p, j = i;
      while (q > 0) {
        if (pattern[q] === str[j]) {
          q -= 1;
          j -= 1;
        } else { 
          break; 
        }
      }
      if (q === 0) {
        return j;
      } else {
        let offset = pattern.indexOf(str[j]);
        i = i + q - offset;
      }
    } else {
      let offset = pattern.indexOf(c);
      i = i + p - offset;
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