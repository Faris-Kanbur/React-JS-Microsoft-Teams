import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const projectID = "2a2cb94b-ad8e-49eb-8521-dec66aca9ae7";

export const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName="faris"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};
