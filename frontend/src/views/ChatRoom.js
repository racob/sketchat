import { useEffect, useState } from "react";
import Canvas from "../component/Canvas";
import Chatbox from "../component/Chatbox";
import useChat from '../utilities/useChat';

const ChatRoom = (props) => {
    const { roomId } = props.match.params; // Gets roomId from URL
    const {messages, sendMessage} = useChat(roomId);
    const [dataURI, setDataURI] = useState('');
    const [isShowCanvas, setShowCanvas] = useState(false);
    //this.canvas = createRef();

    const handleDataURI = (data) => {
        setDataURI(data);
    };

    const toggleShowCanvas = () => {
        setShowCanvas(!isShowCanvas);
    };

    useEffect(() => {
        if(dataURI) sendMessage(dataURI);
    }, [dataURI]);

    return(
        <div className="h-screen flex items-center justify-center bg-gray-100 lg:py-12 lg:px-48">
            <div className="w-full h-full bg-white shadow lg:rounded overflow-hidden flex flex-col">
                <Chatbox messages={messages}/>
                { isShowCanvas && <Canvas className="invisible" handleDataURI={handleDataURI} toggleModal={toggleShowCanvas}/>}
                <button
                    onClick={toggleShowCanvas}
                    className="w-full justify-center py-2 px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Sketch
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;