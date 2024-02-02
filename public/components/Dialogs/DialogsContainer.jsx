import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../src/redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
        /*updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }*/
    }
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs);
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);