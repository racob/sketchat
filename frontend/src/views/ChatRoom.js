import { useEffect, useState } from "react";
import Canvas from "../component/Canvas";
import Chatbox from "../component/Chatbox";
import useChat from '../utilities/useChat';

const ChatRoom = (props) => {
    const { roomId } = props.match.params; // Gets roomId from URL
    const {messages, sendMessage} = useChat(roomId);
    const [dataURI, setDataURI] = useState('');
    const [isShowCanvas, setShowCanvas] = useState(false);

    const handleDataURI = (data) => {
        setDataURI(data);
    };

    const toggleShowCanvas = () => {
        setShowCanvas(!isShowCanvas);
    };

    useEffect(() => {
        if(dataURI){
            sendMessage(dataURI);
            setDataURI('');
        }
    }, [dataURI]);

    return(
        <div className="">
            <div className="">
                <Chatbox messages={messages}/>
                { isShowCanvas && <Canvas className="invisible" handleDataURI={handleDataURI} toggleModal={toggleShowCanvas}/>}
                { !isShowCanvas &&
                    <button
                        onClick={toggleShowCanvas}
                        className="">
                        Sketch
                    </button>
                }
            </div>
        </div>
    );
};

export default ChatRoom;