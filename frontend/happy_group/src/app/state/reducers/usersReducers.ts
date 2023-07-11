import { getUsersData } from './../actions/userActions';
const initialState = {
    users: [],
    loading: true
}

const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                UsersData: action.payload,
                loading: false
            }

        case "createUser":
            return {
                ... state,
                createUserData: action.payload,
                loading: false
            } 
            
        case "updateUser": 
            return {
                ... state,
                updatedData: action.payload,
                loading: false
            } 

        default: 
            return state    
    }
}

export default UsersReducer;