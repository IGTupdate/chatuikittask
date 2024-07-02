import { BsCheck2All } from "react-icons/bs";

const MessageWrapper = ({ msg, role }) => {
    return (
        <div className="flex gap-x-2 leading-none">
            {
                role && (
                    <div className="w-8 h-8 bg-blue-200 rounded-full">
                        <img src="/images/drago-icon.png" alt="" />
                    </div>
                )
            }
            <div className={`w-48 p-2 rounded-lg ${role ? "bg-gray-100 rounded-tl-none" : "bg-blue-600 text-white rounded-tr-none"} arrow`}>
                {
                    role && (
                        <div className="flex gap-x-3 items-center mb-1">
                            <span className="text-sm font-semibold">Aubrey</span>
                            <span className="text-xs text-black/70">Engineering</span>
                        </div>
                    )
                }
                <p className="text-[15px]">{msg}</p>
                <p className="flex justify-end items-center gap-x-1">
                    <span className="text-[10px]">
                        11:31 AM
                    </span>
                    {
                        !role && (
                            <span>
                                <BsCheck2All />
                            </span>
                        )
                    }
                </p>
            </div>
        </div>
    );
};

export default MessageWrapper;