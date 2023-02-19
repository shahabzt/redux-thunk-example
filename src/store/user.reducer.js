let initialState = {
    loading : false,
    users : [],
    error: ""
}


export function userReducer(state = initialState , action){
    switch (action.type) {
        case "FETCH_USERS_REQUEST":{
            return {
                ...state,
                loading:true,

            }
        }
        case "FETCH-USER_SUCCESS":{
            return {
                loading:false,
                users: action.payload
            }
        }

        case "FETCH-USER_FAILURE":{
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        }
        default:
            return state
    }
}