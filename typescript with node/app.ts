const express=require('express')


const app=express()
interface todo{
    val:number;
    desc:string

}
var todos:todo[]=[]
app.get('/',(req,res,next)=>{
 res.status(200).json({todo:todos})
})

app.listen(300)