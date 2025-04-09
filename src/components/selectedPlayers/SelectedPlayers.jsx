import { RiDeleteBin5Line } from "react-icons/ri";
const SelectedPlayers = ({ player ,handleRemovePlayer}) => {
    const { image_url, name, role, batting_style } = player;

    return (
        <div className="container mx-auto mt-4 px-2">
            <div className="flex justify-between items-center py-4 px-4 border-1 border-[#1313131A] rounded-2xl">
                <div className="flex gap-4 md:gap-6">
                    <img className="w-16 md:w-24 object-cover rounded-md" src={image_url} alt="" />
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold">{name} <span className="hidden md:inline text-sm font-normal text-[#13131399]">({role})</span></h2>
                        <span className="text-[#13131399]">{batting_style}</span>

                    </div>
                </div>
                <button 
                onClick={()=>handleRemovePlayer(player.id)}
                className="text-red-500 text-lg md:text-2xl cursor-pointer active:animate-ping">
                    <RiDeleteBin5Line />
                </button>


            </div>
        </div>
    );
};

export default SelectedPlayers;