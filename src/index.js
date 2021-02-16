module.exports = function check(str, bracketsConfig) {
  // your solution
 for (let i = 0; i < str.length; i++){
    for(let x = 0; x < bracketsConfig.length; x++)
    {
      if(str[i] == bracketsConfig[x][0] && str[i+1] == bracketsConfig[x][1]){
        str = str.replace(bracketsConfig[x][0]+bracketsConfig[x][1], '');
        i = -1;
      }
    }
  }
  
  if(str == '')return true;
  else  return false;
}
