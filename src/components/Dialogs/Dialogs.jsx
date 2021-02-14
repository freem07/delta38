import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} /> );

    let messagesElements = props.state.messagesData
    .map( m => <Message message={m.message} />)

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div className={classes.my_messages}>
                {messagesElements}
                </div>
                <div className={classes.message_friend} >
                {messagesElements}
                </div>
                <div>
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText} ></textarea>
                </div>
                <div>   
                    <button onClick={addMessage} >Send Message</button>
                </div> 
            </div>


        </div>
    );
}

export default Dialogs;