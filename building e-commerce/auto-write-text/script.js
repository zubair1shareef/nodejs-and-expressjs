
const text="hello people this is zubai this side";

index=0;

function auotWrite(){

    document.body.innerHTML=text.slice(0,index)
    index++;
    if(index>text.length){
        index=0;
    }
}



setInterval(()=>{
    auotWrite()
},100)