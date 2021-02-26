import { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
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

    const styles = {
        border: "0.0625rem solid #9c9c9c",
        borderRadius: "0.25rem",
      };

    return(
        <div className="h-screen flex items-center justify-center bg-gray-100 lg:py-12 lg:px-48">
            <div className="w-full h-full bg-white shadow lg:rounded overflow-hidden flex flex-col">
                <div className="flex-grow flex flex-col-reverse space-y-2 space-y-reverse">
                    {messages.map((message, i) => (
                        <div 
                            key={i}
                            className="border"
                        >
                            {message.body}
                        </div>
                    ))}
                </div>
                <div className="w-full py-2 px-2 bg-gray-100 flex flex-col space-y-2">
                    <ReactSketchCanvas
                        style={styles}
                        strokeWidth={4}
                        strokeColor="black"
                    />
                    <div className="flex border space-x-2 w-full">
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
                </div>
                <button className="w-full justify-center py-2 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    New message
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;