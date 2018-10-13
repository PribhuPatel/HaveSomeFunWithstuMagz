
var {Users} = require('../../../middlewares/schemas/usersschema');
var {login} = require('../../../utils/usersmodule');
var {createToken} = require('../../../utils/tokenhelper.js');

module.exports = {
    local:  async(req, res) => {
  
        let userEmail = req.body.username;
        let loginuser = await login(Users,{email:userEmail});
       //console.log(olduser.length);
      
        if(!loginuser){
          return res.json({status:false,username: false,password:false,error:false});
        } else{
          if(loginuser.password===req.body.password){
            let token = await createToken({data: {user:{name:loginuser.name, id: loginuser.id}}});
          
           // res.cookie('access-token',token ,{ maxAge: 900000, httpOnly: true });
           // res.send("sada");
        //   console
            return res.cookie('accesstoken',token,{ maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true }).json({status:true ,username:true,password:true,error:false});
          } else{
            return res.json({status:false,username: true,password:false,error:false});
          }
          
        }
      //  res.json(loginuser);
 // console.log(req.body.email);
 // console.log(req.body.password);
     //res.json({ status: true });
    }
  };
  