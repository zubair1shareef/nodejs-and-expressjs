

const product=(a,b)=>{return a*b}

console.log(product(10,20));


class Student{

    constructor(name,section,rollno){
        this.name=name;
        this.section=section;
        this.rollno=rollno;
    }

    getDetails(){
        console.log(this.name,this.section,this.rollno)
    }
}

const zubair=new Student("zuabir" ,"2b",548);
zubair.getDetails();