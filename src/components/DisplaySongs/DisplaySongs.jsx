import React from 'react';

const DisplaySongs = (props) => {
    let rows = [];
    let sortableSongs = [];
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
        sortableSongs.push({
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date
        })
    }

    function displayRows(param) {
                return <table class='table'>
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
    }

    function sortSongs() {
        return sortableSongs.sort((a, b) => {
            let titleA = a.title,
                titleB = b.title;
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
    }

    function displaySorted(param) {
        let sortedSongs = sortSongs();
        let sortedRows = [];
        for (let i = 0; i < sortedSongs.length; i++) {
            let id = sortedSongs[i].id;
            let title = sortedSongs[i].title;
            let artist = sortedSongs[i].artist;
            let album = sortedSongs[i].album;
            let genre = sortedSongs[i].genre;
            let release_date = sortedSongs[i].release_date
            sortedRows.push(<tr>
                            <td>{title}</td>
                            <td>{artist}</td>
                            <td>{album}</td>
                            <td>{genre}</td>
                            <td>{release_date}</td>
                            <td><button class="btn btn-light" name={id} onClick={() => props.delete(id)}>Remove Song</button></td>
                        </tr>)
        }
        console.log(sortedSongs);
        console.log(sortedRows)
                return <table class='table'>
                            <thead class='thead-dark'>
                                <tr>
                                    <th scope="col"><strong>Song</strong></th>
                                    <th scope="col"><strong>Artist</strong></th>
                                    <th scope="col"><strong>Album</strong></th>
                                    <th scope="col"><strong>Genre</strong></th>
                                    <th scope="col"><strong>Release Date</strong></th>
                                    <th></th>
                                </tr>
                                {sortedRows}
                                <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            </thead>
                        </table>
    }
    
    return ( 
        <div>
            {displayRows()}
            {displaySorted()}
        </div>
     );
}
 
export default DisplaySongs;