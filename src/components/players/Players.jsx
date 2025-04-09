import Player from '../player/Player';

const Players = ({ players, handleSelectedPlayers,handleAddPlayer }) => {
 

    return (
        <div className='container mx-auto mt-2 px-2'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                {
                    players.map(player =>
                        <Player
                            handleSelectedPlayers={handleSelectedPlayers}
                            key={player.id}
                            player={player}
                            handleAddPlayer={handleAddPlayer}
                            ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;