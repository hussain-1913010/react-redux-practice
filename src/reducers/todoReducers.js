const initialData = {
    list: []
}

const totoReducers = (state=initialData, action) => {
    switch(action.type){
        case "ADD_TODO":
            const {id, data} = action.payload;
            // validation
            // if(data.length>2)
            if(data && data.length > 2){
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                }
            }
        case "DELETE_TODO": 
            const newList = state.list.filter((elem) => elem.id !== action.id);
            return{
                ...state,
                list: newList
            }
        case "REMOVE_TODO": return {
            ...state,
            list: []
        }
        default: return state;
    }
}

export default totoReducers;