import React from 'react';

const DisplaySongs = (props) => {
    let rows = []
    for (let i = 0; i <props.songs.length; i++) {
        let id = props.songs[i].id;
        let title = props.songs[i].title;
        let artist = props.songs[i].artist;
        let album = props.songs[i].album;
        let genre = props.songs[i].genre;
        let release_date = props.songs[i].release_date;
        rows.push(<tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td>{album}</td>
            <td>{genre}</td>
            <td>{release_date}</td>
            <td><button class="btn btn-light" name={id} onClick={() => props.delete(id)}>Remove Song</button></td>
        </tr>)
    }

    
    
    return ( 
        <div>
            <table class='table table-striped'>
                <thead class='thead-dark'>
                    <tr>
                        <th scope="col"><strong>Song</strong></th>
                        <th scope="col"><strong>Artist</strong></th>
                        <th scope="col"><strong>Album</strong></th>
                        <th scope="col"><strong>Genre</strong></th>
                        <th scope="col"><strong>Release Date</strong></th>
                        <th></th>
                    </tr>
                    {rows}
                    <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                </thead>
            </table>
        </div>
     );
}
 
export default DisplaySongs;