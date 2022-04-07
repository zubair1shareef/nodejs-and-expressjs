const btn=document.getElementById('btn')
const container=document.getElementById('container')

btn.addEventListener('click', ()=>{
    addToast()
})

function addToast(){

    const noti=document.createElement('div')
    noti.classList.add('toast');
    noti.innerText="toast message"

    container.appendChild(noti)

    setInterval(()=>{
        noti.remove();
    },2000)



}