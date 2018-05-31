import {BaseApi} from "../../../BaseApi";


export class LoginApi extends BaseApi {
  static login(data) {
    return this.post("/login", data)
  }
}