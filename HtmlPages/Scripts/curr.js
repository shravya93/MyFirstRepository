function myTimes(){
  var sampleDate= new Date();
  var currMon= sampleDate.currTime();

  console.log(currMon);
}

function updateClock(){
	var x = new Date();
    var x1=x.getMonth() + "/" + x.getDate() + "/" + x.getYear();
     var x2 = x.getHours( )+ ":" + x.getMinutes() + ":" + x.getSeconds();
	 document.getElementById('clock').innerHTML= x2;
	
}



var myColors = ["black","black","pink","blue","yellow"];
for (var i = 0; i < newStr; i++) {
    document.getElementById("logo").innerHTML += myColors[i] + newStr[i];
}
