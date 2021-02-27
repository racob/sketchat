import { Component } from "react";

const Chatbox = class extends Component {
    render() {
        return(
            <div className="flex-grow overflow-auto">
                <div className="h-full flex flex-col space-y-2">
                    {this.props.messages.map((message, i) => {
                        if(message.ownedByCurrentUser)
                            return (
                                <div key={i} className="w-full flex flex-row justify-end">
                                    <img src={message.body} className="w-3/4 border-4 border-blue-500 rounded-xl mr-3"/>
                                </div>
                            )
                        else return (
                            <div key={i} className="w-full flex flex-row justify-start">
                                <img src={message.body} className="w-3/4 border-4 border-green-500 rounded-xl rounded ml-3"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Chatbox;