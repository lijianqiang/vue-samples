import http from '../../http/http-client'

const PlacerService = {
  listByCondition: (query, onSuccess, onError) => {
    http.get('/placers')
    .then(function (response) {
      onSuccess(response)
    })
    .catch(function (error) {
      onError(error)
    });
  },

  createPlacer (model) {

  },

  updatePlacer (model) {

  },

  deletePlacer (model) {

  }
}

export default PlacerService
