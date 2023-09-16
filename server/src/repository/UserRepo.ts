import { User } from "../model/User";

interface IUserRepo {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
  retrieveById(id: number): Promise<User>;
  retriveAll(user: User): Promise<User[]>;
}

export class UserRepo implements IUserRepo {
  async create(user: User): Promise<void>{
    try {
      await User.create({
        name: user.name,
        password: user.password,
      })
    } catch(error){
      throw new Error("Failed to create user")
    }
  }

  async update(user: User): Promise<void>{
    try {
      const newUser = await User.findOne({
        where: {
          id: user.id
        }
      })

      if (!newUser){
        throw new Error("User not found")
      }

      newUser.name = user.name
      newUser.password = user.password

      await newUser.save()

    } catch(error){
      throw new Error("Failed to update user")
    }
  }

  async delete(id: number): Promise<void>{
    try {
      const newUser = await User.findOne({
        where: {
          id
        }
      })

      if (!newUser){
        throw new Error("User not found")
      }

      await newUser.destroy()

    } catch(error){
      throw new Error("Failed to delete user")
    }
  }

  async retrieveById(id: number): Promise<User>{
    try {
      const user = await User.findOne({
        where: {
          id:id,
        }
      })

      if (!user){
        throw new Error("User not found")
      }

      return user

    } catch(error){
      throw new Error("Failed to retrieve user")
    }
  }

  async retriveAll(): Promise<User[]>{
    try {
      const users = await User.findAll()

      return users;

    } catch(error){
      throw new Error("Failed to create user")
    }
  }
}