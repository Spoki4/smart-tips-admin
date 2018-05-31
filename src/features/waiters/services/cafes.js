import {BaseApi} from "../../../BaseApi";

export class CafesApi extends BaseApi {
  static getOne(id) {
    return this.get(`/cafes/${id}`)
  }
}