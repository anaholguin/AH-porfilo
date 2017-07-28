function translation(){
  var str = document.getElementById('DELL').value
  var newWord= ""

  for (var i =0 ; i < str.length; i++) {
    if(str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i'
    || str.charAt(i)==='o' ||str.charAt(i)==='u') {
      newWord+="ub"+str.charAt(i)
    }
    else {
      newWord += str.charAt(i)
    }

  }


  document.getElementById("translation").innerHTML=newWord


}
