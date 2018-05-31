import {BaseApi} from "../../../BaseApi";

export class CafesApi extends BaseApi {
  static getAll() {
    return this.get("/cafes")
  }

  static removeOne(id) {
   return this.delete(`/cafes/${id}`)
  }

  static getOne(id) {
    return this.get(`/cafes/${id}`)
  }

  static updateOne(id, data) {
    return this.put(`/cafes/${id}`, data)
  }

  static createOne(data) {
    return this.post(`/cafes`, data)
  }
}