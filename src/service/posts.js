import PostModel from "../models/user.model.js"
class PostUser{
    constructor(){}

    async GetAllUser(body){

        try {
            let user = await PostModel.find()
            return user

        } catch (error) {
            
            return error.message
        }

    }


    async PostUser(body){

        try {
            let user = await PostModel.create(body)
            return user
        } catch (error) {
            
           return error.message
        }

    }

    async PutUser(body,params){

        try {
            let{id} =params
            let user = await PostModel.findByIdAndUpdate(id,{$set:body},{new:true})
            
            return user
        } catch (error) {
            
          return error.message
        }

    }

    async DeleteUser(params){

        try {
            let{id} =params
            let user = await PostModel.findByIdAndDelete(id)
            return user

        } catch (error) {
            
           return error.message
        }

    }

}
let newPost = new PostUser()

export default newPost