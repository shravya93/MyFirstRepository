
function palindrome(){
	var str= document.getElementById('str1').value;
	document.getElementById('res').innerHTML= "The Entered String is: "+str;
	var strlg= str.length;
	document.getElementById('res1').innerHTML= "The Length of the String is: "+strlg;	
	var newStr = new String(); /* creation of an empty string*/
    for (var i = strlg-1; i >= 0; i--){
    newStr = newStr+str[i];
	
    //console.log(newStr);
	document.getElementById('res2').innerHTML= "The Reverse of the String is: "+newStr;	
	}
	var chars='';
 for(var j=0;j<newStr.length;j++){
	 chars= chars+"<span style='color: red'>"+ newStr[j]+"</span>";
	document.getElementById('res5').innerHTML= chars;	 
 }
	/*function rev(str,newStr){
		this.str=str;
		this.newStr=newStr;*/	
	if(str===newStr)
	{
		
		document.getElementById('res3').innerHTML= "The String is a Palindrome";	
	}
	
	if(str!==newStr)
	{
		document.getElementById('res4').innerHTML= "The String is not a Palindrome";	
	}	
}

function updateClock(){
	var x = new Date();
     var x2 = x.getHours( )+ ":" + x.getMinutes() + ":" + x.getSeconds();
	 document.getElementById('tim').innerHTML= x2;
	
}