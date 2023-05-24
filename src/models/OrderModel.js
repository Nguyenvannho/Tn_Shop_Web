import axios from "axios";

class OrderModel {
    constructor() {
        this.api_url = 'http://127.0.0.1:8000/api/orders';
    }

    checkout(data) {
        return new Promise((resolve, reject) => {
            axios
                .post(this.api_url + '/checkout', data)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err)
                });
        });

    }

}

export default new OrderModel();