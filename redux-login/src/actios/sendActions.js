import axios from 'axios'

export const userSigninRequest = userData => {
  return dispatch => {
    return axios.post('/api/users',userData)
  }
}

export const logIn = name => {
  return {
    type: 'LOGIN',
    name:name
  }
}