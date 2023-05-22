import axios from "axios";

class UserModel {
	constructor() {
		this.api_url = 'http://127.0.0.1:8000/api/';
	}

	login(credentials) {
		return new Promise((resolve, reject) => {
			axios
				.post(this.api_url + 'login', credentials)
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err)
				});
		});

	}

	register(credentials) {
		return new Promise((resolve, reject) => {
			axios
				.post(this.api_url + 'register', credentials)
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err)
				});
		});
	}
	logout() {
		let token = localStorage.getItem('token');
		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		return new Promise((resolve, reject) => {
			axios
				.post(this.api_url + 'logout',null,config)
				.then(res => {
					resolve(true);
				})
				.catch(err => {
					reject(false)
				});
		});
	}
	// return axios.post(this.api_url, credentials);

}

export default new UserModel();
