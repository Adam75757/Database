import newServise from "../service/user.servise.js"

class Users {
    constructor() {}

    async GetAllUser(req, res) {
        try {
            let data = await newServise.GetAllUser(req.body);
            res.send(data);
        } catch (error) {
            res.status(error.status || 400).json({
                status: 400,
                message: error.message
            });
        }
    }

    async PostUser(req, res) {
        try {
            let user = await newServise.PostUser(req.body);
            res.status(201).json({
                status: 201,
                message: "Success",
                data: user
            });
        } catch (error) {
            res.status(error.status || 400).json({
                status: 400,
                message: error.message
            });
        }
    }

    async PutUser(req, res) {
        try {
            let user = await newServise.PutUser(req.body, req.params);
            res.send(user);
        } catch (error) {
            res.status(error.status || 400).json({
                status: 400,
                message: error.message
            });
        }
    }

    async DeleteUser(req, res) {
        try {
            let user = await newServise.DeleteUser(req.params);
            res.send(user);
        } catch (error) {
            res.status(error.status || 400).json({
                status: 400,
                message: error.message
            });
        }
    }
}

let newUsers = new Users();

export default newUsers;
