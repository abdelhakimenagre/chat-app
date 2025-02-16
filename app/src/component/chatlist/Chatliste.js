import React, { useState } from "react";
import "./Chatliste.css";
import MessageComponent from "./chatSectionMessageEnvoyer/chatSection";

const Chatliste = () => {
  const [activeChat, setActive] = useState("");
  const chats = [
    {
      name: "Jordan Park",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:35",
      email: "enagre@gmail.com",
      id: 1,
      attachement: "PDF",
    },
    {
      name: "Jack Davis",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:35",
      email: "enagre@gmail.com",
      id: 2,
      attachement: "PDF",
    },
    {
      name: "Emma Willer",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:35",
      email: "enagre@gmail.com",
      id: 3,
      attachement: "PDF",
    },
    {
      name: "Sophie Turner",
      content:
        "hello im abdelhakim i know some thing is important but im not sur if you wnat to know this conversation but make sure that this came to you so that you can change the conversation",
      time: "10:40",
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
    }
  ];
  return (
    <div className="Messages">
      <div className="chatliste">
        <div className="Search">
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
              <span className="initial">
                {chat.name[0].toUpperCase() + chat.name[1].toUpperCase()}
              </span>
            </div>
            <div className="user-details">
              <div className="name-time">
                <p className="name">{chat.name}</p>
                <p className="timestamp">{chat.time} PDT</p>
              </div>
              <div>
                <p className="email">{chat.email}</p>
                <p className="signature">{chat.content.slice(0, 50)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="MessagesContent">
        {chats
          .filter((chat) => chat.name === activeChat)
          .map((chat) => (
            <MessageComponent {...chat} />
          ))}
      </div>
    </div>
  );
};
export default Chatliste;
