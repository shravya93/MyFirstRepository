function val(){

var str='shravya';
var chars= str.split("");
var result='';
for(var i=0;i<chars.length;i++){
if(i%2==0){
result+='<span class="clr1">'+ chars[i]+'</span>';
}
else {
result+='<span class="clr2">'+ chars[i]+'</span>';
}

}
document.getElementById('liik').innerHTML= result;
}