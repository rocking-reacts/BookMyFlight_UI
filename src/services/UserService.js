import axios from "axios";

export default class UserService{

    constructor(){
        this.uri="http://localhost:8980/";
       
    }

    async addUser(user){
        return await axios.post(this.uri+"/createuser",user).then(response=>{
            return response;
        });
    }

    getUsers(){
        return this.users;
    }

    async getUser(){
    
      
    }

    async validateUser(username,password){
        return await axios.get(this.uri+"/auth/"+username+"/"+password).then(res=>{
            console.log(res);
            console.log(res.data);
            return res;
        });;
    }
}