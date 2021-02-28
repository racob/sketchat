import { Component } from "react";

const Chatbox = class extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        setTimeout(()=>{this.scrollToBottom()},1);
        
    }

    render() {
        return(
            <div className="flex-grow overflow-auto ">
                {this.props.messages.map((message, i) => {
                    if(message.ownedByCurrentUser)
                        return (
                            <div key={i} className="w-full flex flex-row justify-end my-3">
                                <img src={message.body} className="w-3/5 border-4 border-blue-500 rounded-xl mr-3"/>
                            </div>
                        )
                    else return (
                        <div key={i} className="w-full flex flex-row justify-start my-3">
                            <img src={message.body} className="w-3/5 border-4 border-green-500 rounded-xl ml-3"/>
                        </div>
                    )
                })}
                <div className="clear-both" ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        );
    }
}

export default Chatbox;