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

	getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
		  let c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return "";
	}

	setCookie(cname, cvalue, minutes) {
		const d = new Date();
		d.setTime(d.getTime() + (minutes*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	deleteCookie(name) {
		document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}



}

export default new UserModel();
