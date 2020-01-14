import {combineReducers} from 'redux';

const initialState=[];
    const itemInCart = (state=initialState, action)=>{
    switch(action.type){
        case 'ITEM_ADDED_TO_CART':            
                let isExist = false;
                state.length && state.map((item)=>{
                    if(item.id===action.payload.id){
                        ++action.payload.qty;
                        isExist = true;
                    }
                })                          
                !isExist && state.push(action.payload);
                console.log("state in reducer",state, state.length);
                
            return state;

        case 'ITEM_REMOVED_TO_CART':
                state = state.filter(item=>item.id!==action.payload);
                console.log("After removed item", state);  
                return state;

        case 'ADD_QUANTITY':
            state.map((item)=>{
                if(item.id===action.payload){
                    ++item.qty
                }
            })   
            state = state.filter(item=>item.qty!==0);
            console.log("After removed qty state", state);  
            return state;

        case 'REMOVE_QUANTITY':
            state.map((item)=>{
                if(item.id===action.payload){
                    --item.qty
                }
            })   
            state = state.filter(item=>item.qty!==0);
            console.log("After removed qty state", state);  
            return state;

        case 'ITEMS_SORT':  
                state=action.data;
                console.log("******",state);
                return state;

        case 'SEARCH_ITEM':                  
                console.log("in reducer",action.payload);
                return state;
                
        case 'FILTER_DATA':                  
                console.log("in reducer filter",action.payload , state);
                return state;

        default:
                return state;
    }

}

const combineAllReducers = combineReducers({
    itemInCart
});

export default combineAllReducers;

  