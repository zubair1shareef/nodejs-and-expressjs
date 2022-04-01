const url='http://localhost:3000';
const button=document.getElementById('button')

var form=document.querySelector('.form')


form.addEventListener('submit', (e)=>{
    e.preventDefault();


    let userDetails={
        name:e.target.name.value,
        email:e.target.email.value,

    };

    const PostData= async()=>{
        try{
            const res=await axios.post(`${url}/post`,userDetails);
            showUserOnScreen(res)
        }
        catch(err){
            console.log(err)
        }
    }
    PostData();

});




function showUserOnScreen(obj){
    let parent=document.getElementById('userData')
    console.log(obj)

    const dell='<button class="delete">delete</button>'
    const edit='<button class="edit">edit</button>'
    const li=`<li value="${obj.id}">${obj.name} ,${obj.email}${dell} ${edit}</li> `
  
    parent.innerHTML=parent.innerHTML+li
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('data')

   const fun= async function(){
        const users= await axios.get('http://localhost:3000');
       console.log(users.data)
        const userShow=document.getElementById('userData')
        users.data.forEach(user=>{
            console.log(user);
            showUserOnScreen(user)
            
        })
    }
    fun();

})
const odelete=document.getElementById('userData');
if(odelete){
    
    odelete.addEventListener('click',ondeleteAndEdit)
}


function ondeleteAndEdit(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        id=e.target.parentElement.getAttribute("value")
        axios.post(`${url}/post/delete/${id}`)
        console.log(e.target.parentElement)
      //  localStorage.removeItem(id)
        var prnt=e.target.parentElement;
       odelete.removeChild(prnt)

        ////stuck here
     }
    }