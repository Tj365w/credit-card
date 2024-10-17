let g=0;
var ch=0;
var d=['c','e','d','b'];
var d2=[16,2,2,3];
function change(){if(g==0){document.getElementById('area').innerHTML=`<center>
    <div>
      <div style="width: 40%; text-align: left;">
      <p>CARDHOLDER NAME</p>
      <input class="inpt" id="a"  placeholder="  e.g. Jane Appleseed">
      <p>CARD NUMBER</p>
      <input class="inpt" id="c" maxlength="16" pattern="/d*" placeholder="  e.g. 1234 5678 9123 0000">
      <div style="display: flex;">

        <div style="width: 40%;">
        <p>EXP.DATE[MM/YY]</p>
        <div style="display: flex;">
          <input class="inpt" maxlength="2" id='d' placeholder="  MM"><input maxlength="2" class="inpt" id="e" placeholder="  YY">
        </div>
        </div>
        <div style="margin-left: 30px;">
          <p>CVC</p>
          <input class="inpt" id="b" maxlength="3" placeholder="  e.g. 123">
        </div>
      </div>

      <button class='btn' id='btn' style="width: 90%;height: 50px;
      margin-top: 20px;
      border-radius: 5px;
      color: white;
      background-color: black;
      border:  none;
      cursor: pointer;

      ">Confirm</button>
      </div>
      </div>
      </center>
    `}
else{
    document.getElementById('area').innerHTML=`
   <center>
      <div style="width: 40%;">
      <img src="images/icon-complete.svg">
      <h2>THANK YOU</h2>
      We've added your card details
      <button class="btn" id="btn">Continue</button>
  </center>
  </div>
    `
}};
change();

function s(i){
var c= document.getElementById(`${i}`).value || 'Jane Appleseed';
let b='';
for (let i=0;i<c.length;i++){
        b+=c[i];
    
};
document.getElementById(`${i}${i}`).innerHTML=b;

}

function s2(a,x){
    let g= document.getElementById(`${a}`).value||'00';
    let z="";
    //console.log(x);
    for(let i=0;i<x;i++){
        if (i%4==0){
            z+=' '
        };
        z+=g[i]||'0';
    
    };
    i=d.indexOf(`${a}`);
    if(RegExp('[^0-9]+').test(g)){
      document.getElementById(`${a}`).style.borderColor='red';
    
  }
    else{
      if(ch!=0&&document.getElementById(`${d[i]}`).value.length!=d2[i]){document.getElementById(`${a}`).style.borderColor='red';document.getElementById(`${a}`).style.borderWidth='2px';
    }
      
     else{ document.getElementById(`${a}`).style.borderColor='black';}};
    document.getElementById(`${a}${a}`).innerHTML=z;
}
function s3(a){
    var g= document.getElementById(`${a}`).value;
    let z="";
    for(let i=0;i<2;i++){
        z+=g[i]||'0';
    }
    i=d.indexOf(`${a}`)
    if(RegExp('[^0-9]+').test(g)){
      document.getElementById(`${a}`).style.borderColor='red';}
    else{
      if(ch!=0&&document.getElementById(`${d[i]}`).value.length!=d2[i]){document.getElementById(`${a}`).style.borderColor='red';document.getElementById(`${a}`).style.borderWidth='2px'
    }
      
     else{ document.getElementById(`${a}`).style.borderColor='black';}};
    return z;

}


if (g==0){
  var a1=setInterval(function(){s('a')},100);
  var a2=setInterval(function(){s2('b',3);},1000);
  var a3=setInterval(function(){s2('c',16);},1000);
  var a4=setInterval(function(){
      document.getElementById('ff').innerHTML=`${s3('d')}/${s3('e')}`;
  },1000);
}
document.getElementById('btn').addEventListener('click',function(){
 
 let a=0; 
  for(let i=0;i<4;i++){
    //console.log(document.getElementById(`${d[i]}`).value.length);
    if(!(RegExp('[^0-9]+').test(document.getElementById(`${d[i]}`).value))&&document.getElementById(`${d[i]}`).value.length==d2[i]){
        console.log(document.getElementById(`${d[i]}`).value.length);
    a++;
  }}
  if(a==4){
   g++;change();
   clearInterval(a1);
   clearInterval(a2);
   clearInterval(a3);
   clearInterval(a4);}
  else{
    for(let i=0;i<4;i++){
      //console.log(document.getElementById(`${d[i]}`).value.length);
      //console.log(d[i])
      if(!(document.getElementById(`${d[i]}`).value.length==d2[i])){
        ch=1;
      }
    }
  }
  
  
  });
  

  //console.log(undefined ||'0');.