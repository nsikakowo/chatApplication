import { useState } from "react"
import {sendMessage, isTyping} from 'react-chat-engine'
import {SendOutlined, PictureOutlined} from '@ant-design/icons'

const MessageForm = (props) => {
    const [value, setvalue] = useState('');
    const {chatId, creds} = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, {text});

        setvalue('');

    }

    const handleChange =(e)=> {
        setvalue(e.target.value);

        isTyping(props, chatId);
    }

    const handleUpload =(e)=> {
        sendMessage(creds, chatId, {files: e.target.files, text: ""})
    }


  return (
    <form className="message-form" onSubmit ={handleSubmit}>
        <input 
        className='message-input'
        placeholder='Send a message...'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
            <span className='image-button' style={{color:"whitesmoke"}}>
                <PictureOutlined className='picture-icon'/>
            </span>
        </label>
        <input 
            type="file"
            multiple={false}
            id="upload-button"
            style={{display:"none"}}
            onChange={handleUpload}
         />
         <button type="submit" className='send-button' style={{color:"whitesmoke"}}>
             <SendOutlined className='send-icon' />
         </button>
    </form>
  )
}

export default MessageForm