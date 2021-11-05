import React from 'react';

const DisplaySongs = (props) => {
    return ( 
        <div>
            <h3>{props.songs[0].title} - {props.songs[0].artist}</h3>
            <p>{props.songs[0].album}</p>
            <p>Genre: {props.songs[0].genre}</p>
            <p>Release Date: {props.songs[0].release_date}</p>
        </div>
     );
}
 
export default DisplaySongs;