import { useEffect, useState } from "react";
import Canvas from "../component/Canvas";
import Chatbox from "../component/Chatbox";
import Navbar from "../component/Navbar";
import useChat from '../utilities/useChat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
    }, [dataURI,sendMessage]);

    return(
        <div className="is-flex is-flex-direction-column is-clipped h-screen max-h-screen">
            <Navbar roomId={roomId} />
            <Chatbox messages={messages}/>
            { isShowCanvas && <Canvas handleDataURI={handleDataURI} toggleModal={toggleShowCanvas}/>}
            { !isShowCanvas &&
                <button
                    onClick={toggleShowCanvas}
                    className="button is-info is-medium is-absolute is-pulled-right is-radiusless"
                >
                    <span className="icon is-medium is-rounded">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                </button>
            }
        </div>
    );
};

export default ChatRoom;