//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
      dialogs: [
          {id: 1, name: 'Dima'}, 
          {id: 2, name: 'Anton'}, 
          {id: 3, name: 'Andrey'}
      ],
      messages: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you'}, 
        {id: 3, message: 'Yo'}
      ]
};

const dialogsReducer = (state = initialState, action) => {
    //let stateCopy;
    switch (action.type) {
        /*case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
            //stateCopy.newMessageBody = action.body;*/
            
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
            //stateCopy.newMessageBody = '';
            //stateCopy.messages.push({id: 4, message: body});
            //return stateCopy;
        default:
            return state;
    }   
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody })
/*export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})*/

export default dialogsReducer;