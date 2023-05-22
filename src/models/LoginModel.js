import axios from "axios";

class LoginModel {
  constructor() {
    this.api_url = 'http://127.0.0.1:8000/api/login';
  }

  login(credentials) {
    return new Promise( (resolve, reject) => {
        axios
        .post(this.api_url,credentials )
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err)
        });
    });
    // return axios.post(this.api_url, credentials);
  }
}

export default new LoginModel();
