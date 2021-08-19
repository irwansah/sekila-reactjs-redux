import { GET_USER_DETAIL, GET_USER_LIST, POST_USER_CREATE,PUT_USER_EDIT } from '../actions/userAction'
let initialState = {
  title: "Sekila",
  getUserList: false,
  errorUserList: false,
  getUserDetail: false,
  getResponseDataUser: false,
  errorResponseDataUser: false,
  errorUserDetail: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        errorUserList: action.payload.errorMessage
      }

    case GET_USER_DETAIL:
    return {
      ...state,
      getUserDetail: action.payload.data,
      errorUserDetail: action.payload.errorMessage
    }

    case POST_USER_CREATE:
    return {
      ...state,
      getResponseDataUser: action.payload.data,
      errorResponseDataUser: action.payload.errorMessage
    }
    case PUT_USER_EDIT:
    return {
      ...state,
      getResponseDataUser: action.payload.data,
      errorResponseDataUser: action.payload.errorMessage
    }



    default:
      return state;
  }
};

export default users;