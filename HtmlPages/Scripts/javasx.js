function reverse(){
	var str= document.getElementById('tst').value;
	document.getElementById('res').innerHTML= "The Entered String is: "+str;
	var arr=[];
	 for (var i = str.length-1; i >= 0; i--){
    arr = arr+str[i];
	
    //console.log(newStr);
	document.getElementById('res1').innerHTML= "The Reverse of the String is: "+arr;
	var size = 2;
for (var j=0; j<str.length; j+=size) {
    var smallarray = str.slice(i,i+size);
    // do something with smallarray

	
	document.getElementById('res2').innerHTML= "The split String is: "+re;
}
	}
}