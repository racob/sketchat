import { useState } from "react";
import useChat from '../utilities/useChat';

const ChatRoom = (props) => {
    const { roomId } = props.match.params; // Gets roomId from URL
    const {messages, sendMessage} = useChat(roomId);
    const [newMsg, setNewMsg] = useState("");

    const handleNewMessageChange = (event) => {
        setNewMsg(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMsg);
        setNewMsg("");
    };

    return(
        <div className="h-screen flex items-center justify-center bg-gray-100 lg:py-12 lg:px-48">
            <div className="w-full h-full bg-white shadow rounded -space-y-px overflow-hidden flex flex-col">
                <div className="flex-grow">
                    <ol>
                        {messages.map((message, i) => (
                            <li>{message.body}</li>
                        ))}
                    </ol>
                </div>
                <div className="w-full py-2 px-2 bg-gray-100 flex space-x-2">
                    <input
                        value={newMsg}
                        placeholder="Write message..."
                        type="text"
                        onChange={handleNewMessageChange}
                        className="border-gray-300 rounded flex-grow"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="h-full rounded px-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Send
                    </button>
                    
                </div>
                <button className="w-full justify-center py-2 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    New message
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;