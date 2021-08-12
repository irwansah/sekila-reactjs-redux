import axios from "axios";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";

export const getUserList = () => {
    return dispatch => {
        axios.get(`https://my-json-server.typicode.com/irwansah/backend/users`)
            .then(function (res) {
                let result = res.data
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        data: result,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                });
                console.log(error);
            })

    }
}

export const getUserDetail = (id) => {
    return dispatch => {
        axios.get(`https://my-json-server.typicode.com/irwansah/backend/users/${id}`)
            .then(function (res) {
                let result = res.data
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data: result,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                });
                console.log(error);
            })

    }
}
