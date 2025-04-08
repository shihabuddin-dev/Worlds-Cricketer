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
                        className={`${activeBtn ? 'bg-[#E7FE29]' : 'bg-transparent'} border-1 border-gray-400 px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-r-none hover:bg-[#E7FE29]`}>Available</button>
                    <button
                        onClick={() => handleActiveBtn(false)}
                        className={`${activeBtn ? 'bg-transparent' : 'bg-[#E7FE29]'} border-1 border-gray-400 px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-l-none hover:bg-[#E7FE29]`}>Selected {selected}</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;