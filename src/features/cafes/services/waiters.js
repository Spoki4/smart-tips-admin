import {BaseApi} from "../../../BaseApi";

export class WaitersApi extends BaseApi {
  static getAllByCafe(cafeId) {
    return this.get(`/waiters?cafeId=${cafeId}`)
  }
}