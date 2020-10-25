import Api from './api';

const EstablishmentsService = {
  index: (latitude, longitude) => Api.get(`/google_stores?latitude=${latitude}&longitude=${longitude}`)
}

export default EstablishmentsService;