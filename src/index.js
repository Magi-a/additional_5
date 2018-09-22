module.exports = function check(str, bracketsConfig) {

  //make array of a and b brackets (and c)

  var a = [];
  var b = [];
  var c = [];

  for(let i = 0; i < bracketsConfig.length; i++){
/*
    if(bracketsConfig[i][0] === bracketsConfig[i][1]){

      c.push(bracketsConfig[i][0]);

    } else {
      a[i] = bracketsConfig[i][0];
      b[i] = bracketsConfig[i][1];
    }
*/
    a[i] = bracketsConfig[i][0];
    b[i] = bracketsConfig[i][1];
  }
  

  // checking

  if(str.length % 2 !== 0){
    return false;
  }

  var stack = [];

  for(var i = 0; i < str.length; i++){

    if(i === 0){

      if(a.indexOf(str[0]) === -1){
        return false;
      } else {
        stack.push(str[0]);
      }

    } else {

      var id = a.indexOf(stack[stack.length-1]);

      // check pair
      if(b[id] === str[i]){

        // close brackets
        stack.pop();

      } else if(b.indexOf(str[i]) === -1){

        stack.push(str[i]);

      } else if(a.indexOf(str[i]) === -1){
        return false;
        console.log('early close!');
      }
        

  

     




    }

  }

  console.log(stack);

  if(stack.length === 0){
    return true;
  } else return false;


}
