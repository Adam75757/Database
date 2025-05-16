import Model from "../models/user.model.js"
let {UserModel} = Model
class ServiceUser{
    constructor(){}

    async GetAllUser(body){

        try {
            let user = await UserModel.find()
            return user

        } catch (error) {
            
            return error.message
        }

    }


    async PostUser(body){

        try {
            let user = await UserModel.create(body)
            return user
        } catch (error) {
            
           return error.message
        }

    }

    async PutUser(body,params){

        try {
            let{id} =params
            let user = await UserModel.findByIdAndUpdate(id,{$set:body},{new:true})
            
            return user
        } catch (error) {
            
          return error.message
        }

    }

    async DeleteUser(params){

        try {
            let{id} =params
            let user = await UserModel.findByIdAndDelete(id)
            return user

        } catch (error) {
            
           return error.message
        }

    }

}
let newServise = new ServiceUser()

export default newServise