import { Component } from "react";

const Chatbox = class extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    
    // componentDidMount() {
    //     this.scrollToBottom();
    // }
    
    componentDidUpdate() {
        setTimeout(()=>{this.scrollToBottom()},1);
    }

    render() {
        return(
            <div className="is-flex-grow-1 overflow-auto has-background-light">
                {this.props.messages.map((message, i) => {
                    if(message.ownedByCurrentUser) 
                        return (
                            <div key={i} className="panel is-primary m-4 has-background-white is-flex is-flex-direction-column">
                                <p className="panel-heading has-text-right is-size-6">
                                    User
                                </p>
                                <img src={message.body}/>
                            </div>
                        )
                    else
                        return (
                            <div key={i} className="panel is-info m-4 has-background-white is-flex is-flex-direction-column">
                                <p className="panel-heading is-size-6">
                                    User
                                </p>
                                <img src={message.body}/>
                            </div>
                        )
                })}
                <div className="is-invisible" ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        );
    }
}

export default Chatbox;