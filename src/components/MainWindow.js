import React from 'react'
import avatar from '../images/avatar.jpg'
import '../styles/mainwindow.css'
import ChatBox from './ChatBox'

function MainWindow({messageTitle, messageBody, messageTimestamp}) {
    return (
        <div className="main-window">
        <header className="header-wrapper">
            <h4 className="channel-title">
                {messageTitle.replace(/\s/g, '-')}
            </h4>
        </header>
        <div className="message-window">
            <div className="message-container">
                {messageBody.map((message, index)=> (
                    <>
                        <div className="message-info">
                            <img className="message-avatar" src={avatar} alt="avatar"/>
                            <p className="message-name">Colton Leach</p>
                            <p className="message-time">{messageTimestamp}</p>
                        </div>

                        <p key={index} className="message">{message}</p>
                    </>
                ))}
            </div>
        </div>
        <ChatBox />
    </div>
    )
}

export default MainWindow
