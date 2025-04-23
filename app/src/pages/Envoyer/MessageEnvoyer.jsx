import "./message.css";
import Chatbox from "../../component/chatbox/Chatbox";
import React, { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { getTime } from "../../function/timeFunction";


const MessageEnvoyer = () => {
  const [activeChat, setActive] = useState("");
  const CurrentDate = new Date();
  const chats = [
    {
      name: "Jordan Park",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "2025-03-17T16:06:59.117Z",
      email: "enagre@gmail.com",
      id: 1,
      attachement: "",
    },
    {
      name: "Jack Davis",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "2025-04-17T16:06:59.117Z",
      email: "enagre@gmail.com",
      id: 2,
      attachement: "PDF",
    },
    {
      name: "Emma Willer",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "2025-04-17T16:06:59.117Z",
      email: "enagre@gmail.com",
      id: 3,
      attachement: "PDF",
    },
    {
      name: "Sophie Turner",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "2025-03-17T16:06:59.117Z",
      email: "enagre@gmail.com",
      id: 4,
      attachement: "DOCX",
    },
    {
      name: "Michael Brown",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:45",
      email: "enagre@gmail.com",
      id: 5,
      attachement: "XLSX",
    },
    {
      name: "Laura Smith",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:50",
      email: "enagre@gmail.com",
      id: 6,
      attachement: "PDF",
    },
  ];
  const [message, setMessage] = useState("");
  const handelsubmit = (e) => {
    e.preventDefault();
    if (message) {
      console.log(message);
      setMessage("");
    }
  };
  const handelkeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handelsubmit(event);
    }
  };

  return (
    <div className="MessageDash">
      <div className="Conversations">
      <div className="MessageHeader">
        <div className="LocalTime">
          <div className="hour">
            {CurrentDate?.toTimeString().slice(0, 5)} UTC{" "}
          </div>
          <div className="date">
            {CurrentDate?.toLocaleString("default", { month: "long" })}{" "}
            {CurrentDate?.getDate()} {CurrentDate?.getFullYear()}
          </div>
          
        </div>
        
      </div>
        <div className="MessageButtom">
          <input
            type="text"
            placeholder="Search people, word or anything..."
            className="Searchbar"
          />
        </div>
        {chats.map((chat) => (
          <div
            className={`user-profile ${
              chat.name === activeChat ? "active" : ""
            }`}
            onClick={() => setActive(chat.name)}
          >
            <div
              className="user-initials"
              style={{ backgroundColor: chat.id === activeChat ? "white" : "" }}
            >
              {chat.name[0]?.toUpperCase() + chat.name[1]?.toUpperCase()}
            </div>
            <div className="user-details">
              <div className="name-time">
                <p className="name">{chat.name}</p>
                <p className="timestamp" >{getTime(chat.time)} PDT</p>
              </div>
              <div>
                <p className="signature">{chat.content.slice(0, 20)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="MessagesContent">
       <div>
        <div className="email-header">
          {activeChat && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="user-initials">
                {activeChat[0].toUpperCase() + activeChat[1].toUpperCase()}
              </div>
              <h2 className="email-name">{activeChat}</h2>
            </div>
          )}
        </div>
        <div className="messages_Body">
          <div>
        <Chatbox {...chats[0]} activeChat={activeChat} />
        <Chatbox {...chats[1]} activeChat={activeChat} />
        <Chatbox {...chats[1]} activeChat={activeChat} />
          </div>
          <form className="MessageInput" onSubmit={handelsubmit}>
         
          <textarea
            type="text"
            name="messageSender"
            placeholder="Type a message..."
            id="messageSender"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handelkeyDown}
          />
          <div className="buttons"> 
          <div>
            <label htmlFor="attachement">
              <MdOutlineAttachFile size={20} />
            </label>
            <input type="file" name="attachement" id="attachement" />
          </div>
          <button id="buttonsend">
            <IoIosSend size={20} />
            Send
          </button>
          
          </div> 
        </form>
        </div>
        
      
        
      </div>
    </div></div>
  );
};
export default MessageEnvoyer;
