import _ from 'lodash';
import
{
    FETCH_REPORTS,
    CREATE_REPORT,
    FETCH_REPORT,
    DELETE_REPORT,
    EDIT_REPORT 
    
} from '../actions/types';



export default (state = {}, action) => {
   switch(action.type){
       case FETCH_REPORTS:
           return { ...state, ..._.mapKeys(action.payload, 'id') };
       case FETCH_REPORT:
           return { ...state, [action.payload.id]: action.payload };
       case CREATE_REPORT:
           return { ...state, [action.payload.id]: action.payload };   
       case EDIT_REPORT:
           return { ...state, [action.payload.id]: action.payload };   
       case DELETE_REPORT:
           return _.omit(state, action.payload);
           
       default:
           return state;
           
   }
}

