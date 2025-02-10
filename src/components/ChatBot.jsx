import React, { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { MdMessage } from "react-icons/md";



const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    const newMessage = { text: message, from: "Siz", messageId: -1 };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch(
        "https://api.telegram.org/bot7769306403:AAHB59RN5iUFnz5r3N72UDFKEeyAFxdil0w/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: "5427747795", text: message }),
        }
      );

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);

      console.log("Xabar yuborildi:", data);
      setMessage("");
    } catch (error) {
      console.error("Xato:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        "https://api.telegram.org/bot7769306403:AAHB59RN5iUFnz5r3N72UDFKEeyAFxdil0w/getUpdates"
      );
      const data = await response.json();

      if (data.ok) {
        const newMessages = data.result
          .filter((update) => update.message?.text)
          .filter(
            (update) =>
              lastMessageId === null || update.message.message_id > lastMessageId
          )
          .map((update) => ({
            text: update.message.text,
            from: update.message.from.first_name || "Noma",
            messageId: update.message.message_id,
          }));

        if (newMessages.length > 0) {
          setMessages((prevMessages) => [...prevMessages, ...newMessages]);
          setLastMessageId(newMessages[newMessages.length - 1].messageId);
        }
      }
    } catch (error) {
      console.error("Xato:", error);
    } finally {
      setCount((v) => v + 1);
    }
  };

  useEffect(() => {
    setTimeout(fetchMessages, 2000);
  }, [count]);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-custom-red text-white p-3 rounded-full shadow-lg hover:bg-custom-brown transition duration-300 flex items-center"
      >
        <MdMessage style={{ fontSize: "24px" , marginRight: "8px" }} />
        Отправьте нам сообщение
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-5 w-96 bg-white shadow-xl rounded-lg">
          <div className="p-4 bg-[#3390EC] text-white rounded-t-lg flex items-center">
            <div className="w-8 h-8 rounded-full bg-white text-[#3390EC] flex items-center justify-center font-bold mr-3">
              E
            </div>
            <h2 className="text-lg font-bold">Etadoor Chat</h2>
          </div>

          <div className="p-4 h-[400px] overflow-y-auto bg-[#eef2f5]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 max-w-[80%] ${msg.from === "Siz" ? "ml-auto" : "mr-auto"
                  }`}
              >
                <div
                  className={`p-3 rounded-2xl ${msg.from === "Siz"
                      ? "bg-[#3390EC] text-white"
                      : "bg-white text-black"
                    }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <div
                  className={`text-xs text-gray-500 mt-1 ${msg.from === "Siz" ? "text-right" : "text-left"
                    }`}
                >
                  {msg.from}
                </div>
              </div>
            ))}
          </div>

          <div className="flex p-3 bg-white border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Xabar yozing..."
              className="flex-grow p-2 bg-[#f4f4f5] rounded-full px-4 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-[#3390EC] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#2884e0]"
            >
              <IoMdSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
