import React from 'react'

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username; 

  return (
    <div className="message-row">
        {isFirstMessageByUser && (
            <div
                className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
            />
        )}
        {message?.attachments?.length > 0
                ? (
                    <img 
                    src={message.attachments[0].file}
                    alt ="message-attachment"
                    className='massage-image'
                    style={{margin : isFirstMessageByUser ? '4px' : '48px'}}
                    />
                ):
                (
                    <div className="message" style={{float:'left',  backgroundColor:"#3D4290", marginLeft : isFirstMessageByUser ? '4px' : '28px'}}>
                        {message.text}
                    </div>
                )
        }
    </div>
  )
}

export default TheirMessage