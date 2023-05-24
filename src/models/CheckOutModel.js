import axios from "axios";

class CheckOutModel {
    constructor() {
        this.api_url = 'http://127.0.0.1:8000/api/';
    }

    checkout(credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post(this.api_url + 'checkout', credentials)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err)
                });
        });

    }

}

export default new CheckOutModel();