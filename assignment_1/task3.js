const arr=['apple', 'oranges' , '', 'mango', '' , 'lemon'];

const arr2=[];

arr.map((l)=>{
    l==''?"":
    arr2.push(l);
})
console.log(arr2)