import React, { Component } from 'react';
import axios from 'axios';
// import './CreateSong.css';


class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form_data = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
        };
        let response = axios.post('http://127.0.0.1:8000/music/', form_data);
        let data = response.data;
        console.log(data);
        this.props.getSongs();
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <table>
                        <th>Add a Song</th>
                        <tr>
                        <label>Song Title</label>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        </tr>
                        <tr>
                        <label>Artist Name</label>
                        <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                        </tr>
                        <tr>
                        <label>Album Name</label>
                        <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                        </tr>
                        <tr>
                        <label>Genre</label>
                        <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                        </tr>
                        <tr>
                        <label>Release Date</label>
                        <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                        </tr>
                        <tr>
                        <button class="button" type='submit' onClick={() => this.props.getSongs()}>Add Song</button>
                        </tr>
                    </table>
                </div>
            </form>
         );
    }
}
 
export default CreateSong;