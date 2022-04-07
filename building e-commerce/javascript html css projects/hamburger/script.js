const btn=document.getElementById('btn')
const nav=document.getElementById('nav')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    btn.classList.toggle('btnactive')
    if(btn.innerText=='☰'){
        btn.innerText='>';
    }
    else{
        btn.innerText='☰';
    }
})