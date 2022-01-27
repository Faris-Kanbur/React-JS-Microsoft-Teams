import React from "react";
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from "./components/ChatFeed";

import "./App.css";

export const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID=""
        userName="faris"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};
