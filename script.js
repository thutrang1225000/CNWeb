window.onload = init;

function init(){
    slideShows();
}
function slideShows(){
    let slide1=document.querySelector('#slide-1');
    let slide2=document.querySelector('#slide-2');
    let slide3=document.querySelector('#slide-3');
    let i=0;
    setInterval(()=>{
        if(i==0){
            slide1.style.zIndex=2;
            slide2.style.zIndex=1;
            slide3.style.zIndex=1;
            i++;
        }
        else if(i==1){
            slide1.style.zIndex=1;
            slide2.style.zIndex=2;
            slide3.style.zIndex=1;
            i++;
        }
        else{
            slide1.style.zIndex=1;
            slide2.style.zIndex=1;
            slide3.style.zIndex=2;
            i=i-2;
        }
    },1000);
}
