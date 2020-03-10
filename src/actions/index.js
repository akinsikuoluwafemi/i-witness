import reports from '../apis/reports';
import history from '../history';
import
{
    SIGN_IN,
    SIGN_OUT,
    GET_LOCATION,
    CREATE_REPORT,
    EDIT_REPORT,
    DELETE_REPORT,
    FETCH_REPORT,
    FETCH_REPORTS

} from './types';


// export const signIn = (userId) => {
//     return {
//         type: SIGN_IN,
//         payload: userId
//     };

// };

export const signIn = (userId) => async (dispatch, getState)=> {
    
    dispatch({ type: SIGN_IN, payload: userId });
    history.push('/home');
};



// export const signOut = () => {
//     return {
//         type: SIGN_OUT
//     };
// };

export const signOut = () => async (dispatch, getState)=> {
    
    dispatch({ type: SIGN_OUT });
    history.push('/');
};



export const getLocation = (coord) => {
    return {
        type: GET_LOCATION,
        payload: coord
    }
}

export const createReport = (formValues) => async (dispatch, getState)=> {
    const { userId } = getState().auth;
    const response = await reports.post('/reports', { ...formValues, userId });
    
    dispatch({ type: CREATE_REPORT, payload: response.data });
    history.push('/reports/list');
};


export const fetchReports = () => async dispatch  => {
    const response = await reports.get('/reports');

    dispatch({type: FETCH_REPORTS, payload: response.data});
};

export const fetchReport = (id) => async dispatch => {
    const response = await reports.get(`/reports/${id}`);

    dispatch({ type: FETCH_REPORT, payload: response.data });

};

export const editReport = (id, formValues) => async dispatch =>{
    const response = await reports.patch(`/reports/${id}`, formValues);

    dispatch({ type: EDIT_REPORT, payload: response.data })
    history.push('/reports/list');
    
};

export const deleteReport =(id) => async dispatch => {
    
    await reports.delete(`/reports/${id}`);

    dispatch({ type: DELETE_REPORT, payload: id });

}

