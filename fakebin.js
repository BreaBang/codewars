//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(str){
    var str1 = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        str1 += "1"
      }
      else{
        str1 += "0";
      }
    }
    return str1;
  }
