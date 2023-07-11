export const getUsersData = (userData:any) =>{
    return {
        type: "getUsers",
        payload: userData
    }
}
export const createUsersData = (userData:any) =>{
    return {
        type: "createUser",
        payload: userData
    }
}
export const updateUsersData = (updatedUserData:any) =>{
    return {
        type: "updateUser",
        payload: updatedUserData
    }
}
