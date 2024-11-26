import React from 'react'

export const initialstore = {

    count:0,
    name:"APPLE"
}

const Reducer = (state,action) => {

    if(action.type === "INCREMENT"){
        return {
            ...state,
            count:state.count+1
    }
}

    else if(action.type === "DECREMENT"){
  return {

        ...state,
        count:state.count-1
}
}

else if (action.type==="CHANGE_NAME"){
    return{
        ...state,
        name:state.name="MANGO"
    }
}

    
}

export default Reducer
