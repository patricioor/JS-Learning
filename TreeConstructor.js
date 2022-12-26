function TreeConstructor(strArr) { 
  var array = [], contador= {};
  for (i=0;i < strArr.length;i++){
    array.push(strArr[i].match(/[0-9]/g)[0]);
    array.push(strArr[i].match(/[0-9]/g)[1]);
  }
  array.forEach(function(x){
    contador[x] = (contador[x] || 0 ) + 1
    }
  );
  
  for(n in contador){
    if (contador[n] >=4){
      return false;
    }
  }
  return true;
}

console.log(TreeConstructor(['(1,2)','(2,4)','(5,7)','(7,2)','(9,5)']))
console.log(TreeConstructor(['(1,2)','(3,2)','(2,12)','(5,2)']))


