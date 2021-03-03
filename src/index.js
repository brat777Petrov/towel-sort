
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix ) return [];
  
var arr = [];
var arrL = [];
  for (var i = 0; i < matrix.length; i++ ) {
    arr = matrix[i];
      if ( i%2 ) arr.reverse();
    for (var j = 0; j < arr.length; j++ ) {
      arrL.push(arr[j]);
    };
    
    
  };
  console.log(arrL);  
    console.log(typeof(arrL));
  
return arrL;
}
