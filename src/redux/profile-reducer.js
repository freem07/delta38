const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 1, },
        { id: 2, message: "It's my first posts", likesCount: 100500 },
    ],
    newPostText: 'itiT',
    profile: null,
};


const profileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5,message: body,likesCount: 0, }]
            };

        
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return{...state, profile: action.profile}

        
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,  
});


export default profileReducer