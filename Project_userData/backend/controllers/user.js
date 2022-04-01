
const User=require('../models/user')

exports.getData=(req,res)=>{


    User.findAll().then(result=>{
        res.json(result)

    })
    .catch(error=>{
        console.log(error)
    })

}

exports.postData=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email

    User.create({
        name,
        email

    })
    .then(()=>{
        res.json({name:req.body.name,email:req.body.email})

    })
   
}
exports.postDelete=(req,res)=>{
    User.findByPk(req.params.Id).then(user=>{
        return user.destroy()
    })
    .then(result=>{
        res.json({msg:"user deleted"})

    })
    .catch(err=>{
        console.log(err)
    })
}

exports.putedit=(req,res)=>{
    const id=req.params.Id
    const name=req.body.name
    const email=req.body.email

    User.findByPk(id).then(user=>{
        user.name=name
        user.email=email

        return user.save()

    })
    .then(resu=>{
        res.json({msg:"updated"})
    })
    .catch(error=>{
        console.log(error)
    })
}

