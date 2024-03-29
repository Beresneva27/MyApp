import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

//const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
//const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: { 
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12}, 
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Hello', likesCount: 12}, 
                {id: 4, message: 'I tied', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'},
        dialogsPage: { 
            messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'How are you'}, 
            {id: 3, message: 'Yo'}
          ],
          dialogs: [
              {id: 1, name: 'Dima'}, 
              {id: 2, name: 'Anton'}, 
              {id: 3, name: 'Andrey'}
          ],
          newMessageBody: ""
        
        },
        sidebar: {}  
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, 

    dispatch(action) { //{type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
