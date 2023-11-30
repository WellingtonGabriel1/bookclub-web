import { api } from 'services/api'

export const getFavorites = () =>
  api.get('/userbook', {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const addBookToFavorite = (data) =>
  api.post('/userbook', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const deleteBookFromFavorite = (id) =>
  api.delete(`/userbook/${id}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
