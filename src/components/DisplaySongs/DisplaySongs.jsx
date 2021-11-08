import React from 'react';

const DisplaySongs = (props) => {
    let rows = []
    for (let i = 0; i <props.songs.length; i++) {
        let id = i;
        let title = props.songs[i].title;
        let artist = props.songs[i].artist;
        let album = props.songs[i].album;
        let genre = props.songs[i].genre;
        let release_date = props.songs[i].release_date;
        rows.push(<tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{artist}</td>
            <td>{album}</td>
            <td>{genre}</td>
            <td>{release_date}</td>
            <td><button class="button" name={i} onClick={() => props.delete(rows[i].id)}>Remove Song</button></td>
        </tr>)
    }
    
    return ( 
        <div>
            <table class='showSongs'>
                <tr>
                    <td><strong>ID</strong></td>
                    <td><strong>Song</strong></td>
                    <td><strong>Artist</strong></td>
                    <td><strong>Album</strong></td>
                    <td><strong>Genre</strong></td>
                    <td><strong>Release Date</strong></td>
                </tr>
                {rows}
            </table>
        </div>
     );
}
 
export default DisplaySongs;