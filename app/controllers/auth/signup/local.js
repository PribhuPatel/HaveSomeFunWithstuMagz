

var {Users} = require('../../../middlewares/schemas/usersschema');
var {login} = require('../../../utils/usersmodule');

module.exports = {
    local: async (req, res) => {
        
        let userEmail = req.body.email;
        let olduser = await login(Users,{email:userEmail});
       //console.log(olduser.length);
    if(olduser.length===0){
        var user = new Users({
            email : req.body.email,
            password  : req.body.password
        });
       await user.save((err)=>{
            if(err) {
              //  console.log(err);
                res.send(err);
            }
            else{
               // console.log("Saved");
            res.send(user + "saved");
            }
        });
    }else{
        res.send("User Already exist");
    }
//   console.log(req.body.email);
//   console.log(req.body.password);
     // res.json({ status: true });
    },
  };
  