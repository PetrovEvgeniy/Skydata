const aircraftService = {
    load: function (id, limit) {
      return fetch(`http://localhost:9999/api/aircraft${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    },
    create: function(data) {
        return fetch(`http://localhost:9999/api/aircraft/`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
      }
}
export default aircraftService;