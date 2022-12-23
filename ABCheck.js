function abcheck(str) { 
  for(let i = 0; i <= str.length; i++) {
    if(i < str.length) {
      if(str[i] === 'a' && str[i+4] === 'b') {
        return true;
      }
    } else if(i === str.length) {
      return false;
    }
  }
}

console.log(abcheck("after badly"));
console.log(abcheck("Laura sobs"));
