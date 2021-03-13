const SET_USER_DATA = 'SET_USER_DATA'
const UN_FOLLOW = 'UN_FOLLOW'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default:
            return state;
    };
};

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, login, email} });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export default authReducer;