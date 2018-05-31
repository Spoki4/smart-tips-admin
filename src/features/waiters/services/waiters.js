import {BaseApi} from "../../../BaseApi";

export class WaitersApi extends BaseApi {
  static getAll() {
    return this.get("/waiters")
  }

  static removeOne(id) {
   return this.delete(`/waiters/${id}`)
  }

  static getOne(id) {
    return this.get(`/waiters/${id}`)
  }

  static updateOne(id, data) {
    return this.put(`/waiters/${id}`, data)
  }

  static createOne(data) {
    return this.post(`/waiters`, data)
  }
}