import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [roomName, setRoomName] = useState("");
    
    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sketchat
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sketch your chat
                </p>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="nickname" className="sr-only">Nickname</label>
                            <input
                                id="nickname" 
                                name="nickname" 
                                type="text" 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Nickname" />
                        </div>
                        <div>
                            <label htmlFor="roomId" className="sr-only">Room name</label>
                            <input
                                id="roomId"
                                name="roomId"
                                type="text"
                                value={roomName}
                                onChange={handleRoomNameChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Room name" />
                        </div>
                    </div>
                    <Link 
                        to={`/${roomName.replace(/\s/g, '_')}`}
                        type="submit"
                        className="w-full justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        Start chatting!
                    </Link>
                    
                </form>
            </div>
        </div>
    );
};

export default Home;

