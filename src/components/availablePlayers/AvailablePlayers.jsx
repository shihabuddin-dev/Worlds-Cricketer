const AvailablePlayers = ({ selected, activeBtn, setActiveBtn }) => {
    const handleActiveBtn = (btnName) => {
        setActiveBtn(btnName)
    }
    return (
        <div className='container mx-auto mt-6 px-2'>
            <div className='flex justify-between gap-2 flex-col md:flex-row items-center py-4'>
                <h2 className='text-xl md:text-2xl font-bold'>Available Players</h2>
                <div>
                    <button
                        onClick={() => handleActiveBtn(true)}
                        className={`${activeBtn ? 'bg-gradient-to-r from-pink-300 to-yellow-300' : 'bg-transparent'} border-1 border-[#1313131A] px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-r-none hover:bg-gradient-to-r from-pink-300 to-yellow-300`}>Available</button>
                    <button
                        onClick={() => handleActiveBtn(false)}
                        className={`${activeBtn ? 'bg-transparent' : 'bg-gradient-to-r from-pink-300 to-yellow-300'} border-1 border-[#1313131A] px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-l-none hover:bg-gradient-to-r from-pink-300 to-yellow-300`}>Selected {selected}</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;