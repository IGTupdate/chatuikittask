import MessageWrapper from "./MessageWrapper";


const ChatBody = () => {
    return (
        <div className="px-4 py-4 border-y-2">
            <div className="text-center">
                <p className="text-black/50">8/20/2024</p>
            </div>
            <div className="*:grid *:gap-y-2 py-4">
                <div className="justify-end">
                    <MessageWrapper msg={"hi"} />
                    <MessageWrapper msg={"hi"} />
                </div>
                <div>
                    <MessageWrapper msg={"hi"} role="sender" />
                </div>
                <div className="justify-end">
                    <MessageWrapper msg={"hi"} />
                </div>
                <div>
                    <MessageWrapper msg={"hi"} role="sender" />
                    <MessageWrapper msg={"hi"} role="sender" />
                </div>
                <div className="justify-end">
                    <MessageWrapper msg={"hi"} />
                </div>
                <div>
                    <MessageWrapper msg={"hi"} role="sender" />
                </div>
            </div>
        </div>
    );
};

export default ChatBody;