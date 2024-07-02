import { IoIosMore } from "react-icons/io";

const Header = () => {
    return (
        <div className="flex justify-between items-center flex-wrap px-4 py-5">
            <div className="flex justify-end -space-x-1">
                <div className="avatar_group">
                    <img src="/images/avatar1.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="avatar_group">
                    <img src="/images/avatar2.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="avatar_group">
                    <img src="/images/avatar3.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="avatar_group">
                    <img src="/images/avatar4.png" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="text-center">
                <div className="flex items-center justify-center mb-1 gap-x-2">
                    <img src="/images/logo2.png" alt="" className="w-full max-w-32" />
                    {/* <h2 className="font-semibold">Team Unicorns</h2> */}
                </div>
                <p className="text-sm text-black/70">last seen 45 minutes ago</p>
            </div>
            <div>
                <button className="button">
                    <IoIosMore />
                </button>
            </div>
        </div>
    );
};

export default Header;