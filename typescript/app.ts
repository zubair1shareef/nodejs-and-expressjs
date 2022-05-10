const num1Ele=document.getElementById('num1') as HTMLInputElement
const num2Ele=document.getElementById('num2') as HTMLInputElement
const button=document.querySelector('button')!


const numarray:number[]=[];
const strarray:string[]=[];
type NumorStr=number | string
function add(num1:NumorStr,num2:number|string){
    if(typeof num1==='number' && typeof num2==='number' ){
        return num1+num2
    }
    else if(typeof typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2
    }
    
}
function printResult(resultObj:{val:number;timestamp:Date}){
    console.log(resultObj.val)

}
button.addEventListener('click', ()=>{
    const num1=+num1Ele.value
    const num2=+num2Ele.value
    const result=num1+num2
    console.log(add(+num1,+num2))
    console.log(printResult({val:result as number,timestamp:new Date()}));
    
})

const promise=new Promise<string>((resolve,reject)=>{

    setTimeout(()=>{
        console.log('worked')
    },1000)
})

promise.then((res)=>{
console.log(res.split('w'))
})



