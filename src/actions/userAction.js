import axios from "axios";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

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


export const deleteTempData = (id) => {
    return dispatch => {
        dispatch({
            type: GET_USER_DETAIL,
            payload: {
                data: false,
                errorMessage: false
            }
        });
        dispatch({
            type: POST_USER_CREATE,
            payload: {
                data: false,
                errorMessage: false
            }
        });
    }
}

export const postUserCreate = (data) => {
    return dispatch => {
        axios.post(`https://my-json-server.typicode.com/irwansah/backend/users`,data)
            .then(function (res) {
                let result = res.data
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: result,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                });
                console.log(error);
            })

    }
}

export const putUserEdit = (data,id) => {
    return dispatch => {
        axios.put(`https://my-json-server.typicode.com/irwansah/backend/users/${id}`,data)
            .then(function (res) {
                let result = res.data
                dispatch({
                    type: PUT_USER_EDIT,
                    payload: {
                        data: result,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: PUT_USER_EDIT,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                });
                console.log(error);
            })

    }
}






