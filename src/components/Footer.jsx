import { BsEmojiSmile } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="px-4 py-5">
            <form>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                        <div>
                            <button className="button">
                                <BsEmojiSmile />
                            </button>
                        </div>
                        <div>
                            <input type="text" placeholder="Start typing..." className="outline-none" />
                        </div>
                    </div>
                    <div className="space-x-3">
                        <button className="button">
                            <MdAlternateEmail />
                        </button>
                        <button className="button">
                            <VscSend />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Footer;