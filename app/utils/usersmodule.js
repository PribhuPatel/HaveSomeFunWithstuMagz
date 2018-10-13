/* centalizing all the manual queries at one place */
module.exports = {
    login : async (Users, query) =>{
        return new Promise((resolve, reject) =>{
            Users.findOne(query,(err,result)=>{
                (err ? reject(err) : resolve(result))
            })
        })
    }
}