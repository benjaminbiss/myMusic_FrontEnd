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

    function sortSongs(param) {
        return sortableSongs.sort((a, b) => {
            let keyA = a[param],
                keyB = b[param];
            if (keyA < keyB) {
                return -1;
            }
            if (keyA > keyB) {
                return 1;
            }
            return 0;
        });
    }

    function displaySorted(param) {
        let sortedSongs = sortSongs(param);
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
    
    function sorter(param) {
        let key = param;
        switch (key) {
            case 'title':
                return <div>
                            {displaySorted(key)}
                       </div>
            case 'artist':
                return <div>
                            {displaySorted(key)}
                       </div>
            case 'album':
                return <div>
                            {displaySorted(key)}
                       </div>
            case 'genre':
                return <div>
                            {displaySorted(key)}
                       </div>
            case 'release_date':
                return <div>
                            {displaySorted(key)}
                       </div>
            default:
                return <div>
                            {displaySorted()}
                       </div>
        }
    }

    return ( 
        <div>
            <form>
                <select>
                    <option value="" onChange={displayRows()}>Sort By</option>
                    <option value="title">Title</option>
                    <option value="album">Album</option>
                    <option value="artist">Artist</option>
                    <option value="genre">Genre</option>
                    <option value="release_date">Release Date</option>
                </select>
            </form>
            {sorter()}
            {sorter("title")}
            {sorter("artist")}
            {sorter("album")}
            {sorter("genre")}
            {sorter("release_date")}
        </div>
     );
}
 
export default DisplaySongs;