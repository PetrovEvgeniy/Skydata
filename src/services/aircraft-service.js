import apiUrl from './config';

const aircraftService = {
    load: function (id, limit) {
      return fetch(`${apiUrl}/aircraft${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    },
    create: function(data) {
        return fetch(`${apiUrl}/aircraft/`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
      },

      update: function(data,id) {
        return fetch(`${apiUrl}/aircraft/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => console.log("Successfully updated!"));
      },

      delete: function(id) {
        return fetch(`${apiUrl}/aircraft/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        }).then(res => res.json()).catch(err => {
          console.log(err)
        });
      }
}
export default aircraftService;