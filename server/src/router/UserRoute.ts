import BaseRoutes from "./base/BaseRouter"
import UserController from '../controller/userController'
import validate from "../helper/validate"
import { createUserSchema } from "../schema/UserSchema"

class UserRoutes extends BaseRoutes {
  public routes():void {
    this.router.post("/", validate(createUserSchema), UserController.create)
    this.router.put("/:id", validate(createUserSchema), UserController.update)
    this.router.delete("/:id", UserController.delete)
    this.router.get("/", UserController.findAll)
    this.router.get("/:id", UserController.findById)
  }
}

export default new UserRoutes().router