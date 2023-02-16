import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            console.log('hi' + action.payload);
            state.splice(action.payload, 1)
        },
        deleteAllUsers(state, action){
            return [];
        },
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteAllUsers, () => {
            return [];
        })
    }
})
console.log(userSlice.actions)
export const {addUser, removeUser, deleteAllUsers} = userSlice.actions;
export {userSlice};