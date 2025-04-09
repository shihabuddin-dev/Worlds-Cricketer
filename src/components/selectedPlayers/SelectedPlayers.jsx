import { RiDeleteBin5Line } from "react-icons/ri";
const SelectedPlayers = ({ player }) => {
    const { image_url, name, role, batting_style } = player;

    return (
        <div className="container mx-auto mt-4 px-2">
            <div className="flex justify-between items-center py-4 px-4 border-1 border-[#1313131A] rounded-2xl">
                <div className="flex gap-4">
                    <img className="w-24 object-cover rounded-md" src={image_url} alt="" />
                    <div>
                        <h2 className="text-xl font-semibold">{name} <span className="text-sm font-normal text-[#13131399]">({role})</span></h2>
                        <span className="text-[#13131399]">{batting_style}</span>

                    </div>
                </div>
                <button className="text-red-500 text-2xl cursor-pointer active:animate-bounce">
                    <RiDeleteBin5Line />
                </button>


            </div>
        </div>
    );
};

export default SelectedPlayers;