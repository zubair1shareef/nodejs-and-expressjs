const  imgs=document.getElementById('images')

let idx=0;

const img=document.querySelectorAll('#images img')

function run(){
    idx++;
   
    if(idx>img.length-1){
        idx=0;
    }

    imgs.style.transform=`translateX(${-idx*500}px)`
    setTimeout(()=>{
        run()
    
    },2000)
}
run()
