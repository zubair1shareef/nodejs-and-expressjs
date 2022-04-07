const  imgs=document.getElementById('images')
const  leftbtn=document.getElementById('leftbtn')
const  rightbtn=document.getElementById('rightbtn')




var idx=0;

const img=document.querySelectorAll('#images img')

function run(){
   
    console.log(idx)
    idx++;
   
    if(idx>img.length-1){
        idx=0;
    }

    imgs.style.transform=`translateX(${-idx*500}px)`
   
}
leftbtn.addEventListener('click', ()=>{
    if(idx==0){
        idx=img.length-1;
    }
    idx--;
    
    imgs.style.transform=`translateX(${-idx*500}px)`
})
rightbtn.addEventListener('click', ()=>{
    if(idx>img.length-1){
        idx=0;
    }
    idx++;
    
    imgs.style.transform=`translateX(${-idx*500}px)`
})

setInterval(()=>{
    
    run()

},1000)

