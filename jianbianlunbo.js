var carouselnav=document.getElementById("index");
var outer=document.getElementById("gradualcarousel");
carouselnav.style.left=(outer.offsetWidth - carouselnav.offsetWidth)/2 + "px";




function movegradualimg(list,index){
    for(var i=0;i<list.length;i++){
        if (list[i].className=='opa-on'){
            list[i].className='';
        }
    }
    list[index].className='opa-on';
}


function moveIndex(list,num){
    for(var i=0;i<list.length;i++){
        if(list[i].className=="on"){
            list[i].className='';
        }
    }
    list[num].className='on';
}




var gradualimgList=document.getElementById('gradualimg').getElementsByTagName('li');
var list=carouselnav.getElementsByTagName('li');
var index=0;
var timer;


for(var i=0;i<list.length;i++){
    list[i].index=i;
    list[i].onmouseover=function(){
       var clickIndex=parseInt(this.index);
       index=clickIndex;
       moveIndex(list,index);
       movegradualimg(gradualimgList,index);
       clearInterval(timer);
    }
    list[i].onmouseout=function(){
        gradualplay();
    }
}

function nextgradualMove(){
    index+=1;
    if(index>=5)
        index=0;
    movegradualimg(gradualimgList,index);
    moveIndex(list,index);
}

function gradualplay(){
    timer=setInterval(function(){
        nextgradualMove();
    },3000);
}
gradualplay();
