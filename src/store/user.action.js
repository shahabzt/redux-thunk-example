import axios from "axios"


function fetchUserRequest(){
    return {
        type: "FETCH_USERS_REQUEST"
    }
}

function fetchUserSuccess(users){
    return {
        type: "FETCH-USER_SUCCESS",
        payload: users
    }
}

function fetchUserFailure(error){
    return {
        type: "FETCH-USER_FAILURE",
        payload: error
    }
}

const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export function fetchUsers(){
    return (dispatch)=>{
        dispatch(fetchUserRequest);
        axios.get(BASE_URL)
        .then((response)=>{
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch((error)=>{
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}