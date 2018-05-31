import history from "./utils/history";

export class BaseApi {
  static URL = process.env.NODE_ENV === 'production'
    ? ''
    : 'http://192.168.99.100:3000';

  static post(url, params) {
    const requestParams = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    return BaseApi.request(url, requestParams)
  }

  static get<R>(url) {
    const requestParams = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return BaseApi.request(url, requestParams)
  }

  static delete(url) {
    const requestParams = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return BaseApi.request(url, requestParams)
  }

  static put<R>(url, params) {
    const requestParams = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    return BaseApi.request(url, requestParams)
  }

  static request(url, requestParams) {
    const params = {
      ...requestParams,
      headers: {
        ...requestParams.headers,
        'Authorization': localStorage.getItem('token')
      }
    }

    return fetch(`${BaseApi.URL}${url}`, params)
      .then(response => {
        if (response.status === 401 || response.status === 403) {
          throw new Error('AUTH_EXPIRES');
        }
        return response.json()
      }).then(data => {
        if (data.stack) {
          throw new Error(data.message)
        }
        return data
      }).catch(error => {
        if (error === "AUTH_EXPIRES")
          return history.push("/");

        throw error
      });
  }
}