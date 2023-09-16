import { Request, Response } from "express"
import { User } from '../model/User'
import { UserRepo } from "../repository/UserRepo"

class UserController {
  async create(req:Request, res: Response){
    try {
      const newUser = new User()
      newUser.name = req.body.name
      newUser.password = req.body.password

      await new UserRepo().create(newUser)

      res.status(201).json({
        status: "Created",
        message: "Successfully created user"
      })
    }
    catch(err: any){
      res.status(500).json({
        status: "Internal Server Error",
        message: err.message || err
      })
    }
  }

  async delete(req:Request, res: Response){
    try {
      let id = parseInt(req.params["id"])

      await new UserRepo().delete(id)

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted user"
      })
    }
    catch(err: any){
      res.status(500).json({
        status: "Internal Server Error",
        message: err.message || err
      })
    }
  }

  async findAll(req:Request, res: Response){
    try {
      const users = await new UserRepo().retriveAll()

      res.status(200).json({
        status: "Ok!",
        message: "Success",
        data: users
      })
    }
    catch(err: any){
      res.status(500).json({
        status: "Internal Server Error",
        message: err.message || err
      })
    }
  }

  async findById(req:Request, res: Response){
    try {
      let id = parseInt(req.params["id"])

      const user = await new UserRepo().retrieveById(id)

      res.status(200).json({
        status: "Ok!",
        message: "Success",
        data: user
      })
    }
    catch(err: any){
      console.log("disini", err.message)
      res.status(500).json({
        status: "Internal Server Error",
        message: err.message || err
      })
    }
  }

  async update(req:Request, res: Response){
    try {
      let id = parseInt(req.params["id"])

      const user = new User()
      user.id = id
      user.name = req.body.name
      user.password = req.body.password

      await new UserRepo().update(user)

      res.status(200).json({
        status: "Ok!",
        message: "Successfully update user",
      })
    }
    catch(err:any){
      res.status(500).json({
        status: "Internal Server Error",
        message: err.message || err
      })
    }
  }
}

export default new UserController()