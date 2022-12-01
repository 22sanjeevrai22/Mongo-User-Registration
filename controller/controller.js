const USER = require('../model/model')

const UserController = {

        register : async (req, res) =>{
        const {username, password} = req.body;

        const user = await USER.findOne({username : username})
        if(user === null){
            const newUser = new USER({username, password}).save()

            return res.status(200).send("Register Successful");
        }

        else {
         return res.status(401).send("Register Unsuccessful");
        }

        
    },

       login : async (req, res) => {
             const {username, password} = req.body;

             const user = await USER.findOne({username, password});

             if(user !== null){
                return  res.status(200).   send("Yo you are logged in");
             }
             else{
                return res.status(401).send("Yo, your login is Unsuccessful");
             }

        },

        getAllUsers : async (req, res) =>{
            const users = await USER.find();
            return res.status(200).send('You got all the users')
            
        }


    }

    module.exports = UserController

