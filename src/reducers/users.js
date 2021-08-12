import { GET_USER_DETAIL, GET_USER_LIST } from '../actions/userAction'
let initialState = {
  title: "Sekila",
  getUserList: false,
  errorUserList: false,
  getUserDetail: false,
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


    default:
      return state;
  }
};

export default users;