 var arr = [1,2,3,4,5,1,2,3,8,1,5,6,8,9,4,5,4,54,54,54,54,54,5,4];

function uniqueNo(_arr){
  var result = [];
  for(var i = 0; i < _arr.length;i++){
   if(_arr.indexOf(_arr[i]) == i){
      result.push(_arr[i]);
    } 
  }  
  return result;
}

console.log(uniqueNo(arr));