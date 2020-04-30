import apiUrl from './config';

const userService = {
  get: function() {
    return fetch(`${apiUrl}/user`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json());
  },
  getOne: function() {
    return fetch(`${apiUrl}/user/getOne`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json());
  },
    register: function (data) {
      return fetch(`${apiUrl}/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.text().then(text => res.status === 200 ? text : Promise.reject(text)));
    },
  
    login: function (data) {
      return fetch(`${apiUrl}/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => {
        if(res.status === 200){
          return res.json()
        }
        else{
          return res.text().then(text => res.status === 200 ? text : Promise.reject(text))
        }
      });

    },
  
    logout: function () {
      return fetch(`${apiUrl}/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    }
  
  };
  
  export default userService;