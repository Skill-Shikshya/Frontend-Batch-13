import { useEffect, useRef, useState } from "react";

function Chat() {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  useEffect(() => {
    socket.current = new WebSocket(
      "wss://s15035.blr1.piesocket.com/v3/room-1?api_key=yGrju5nyogDkqoYi7eZLVn0i5ZflX3dQr6aTW8DH&notify_self=0"
    );
    socket.current.onopen = () => {
      console.log("socket is open");
    };
    socket.current.onmessage = (e) => {
      setMessages((prev) => [...prev, JSON.parse(e.data)]);
    };
    return () => {
      socket.current?.close();
    };
  }, []);
  console.log(messages);
  return (
    <div>
      <input
        onChange={(e) => {
          setCurrentMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          socket.current.send(
            JSON.stringify({ user: "someone", message: currentMessage })
          );
          setMessages((prev) => [
            ...prev,
            { user: "someone", message: currentMessage },
          ]);
          setCurrentMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Chat;
