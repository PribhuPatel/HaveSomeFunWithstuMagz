
var {Users} = require('../../../middlewares/schemas/usersschema');
var {login} = require('../../../utils/usersmodule');
var {createToken} = require('../../../utils/tokenhelper.js');

module.exports = {
    google:  async (req, res) => {
  
        let userEmail = req.body.username;
        let userName = req.body.name;
        let loginuser = await login(Users,{email:userEmail});
       //console.log(olduser.length);
      
        if(!loginuser){
            var user = new Users({
                email : userEmail,
                name : userName
            });
           await user.save(async (err,result)=>{
                if(err) {
                  //  console.log(err);
                    res.send(err);
                }
                else{
                    let loginuser = await login(Users,{email:userEmail});
                    let token = await createToken({data: {user:{name:loginuser.name, id: loginuser.id}}});
                   // console.log("Saved");
                   return res.cookie('accesstoken',token,{ maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true }).json({status:true, signupProcess:true});
                }
            });
        }else{
            let token = await createToken({data: {user:{name:loginuser.name, id: loginuser.id}}});
            // console.log("Saved");
            return res.cookie('accesstoken',token,{ maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true }).json({status:true, signupProcess:false});
        }
      //  res.json(loginuser);
 // console.log(req.body.email);
 // console.log(req.body.password);
     //res.json({ status: true });
    }
  };
  