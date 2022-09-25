const users = require("../public/user.json")

module.exports.getAllUsers = (req,res)=>{
    res.json(users)
}


module.exports.getUserDetails = (req,res) =>{
    const {id} = req.params;
    const filterUser = users.find(user => user.id === Number(id))
    res.json(filterUser)

}

module.exports.saveUser = (req,res) =>{
    users.push(req.body)
    res.json(users)
}

module.exports.userUpdate = (req,res) =>{
    const {id} = req.params;
    const filter = {_id:id}
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photo = req.body.photo;

    res.json(newData)
}

module.exports.deleteUser = (req,res)=>{
    const {id} = req.params;
    const filter = {_id:id};
    const newData = users.filter(user =>user.id !== Number(id))
    res.json(newData)
}