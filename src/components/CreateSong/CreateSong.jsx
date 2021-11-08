import React, { Component } from 'react';
import axios from 'axios';


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
                    <table class='table'>
                        <thead class='thead-dark'>  
                            <th>Add a Song</th>
                            <th></th>
                            <th></th>
                            <tr>
                            <td><label>Song Title</label></td>
                            <td><input type="text" name="title" onChange={this.handleChange} value={this.state.title}/></td>
                            <td><button class="btn btn-light" type='submit' onClick={() => this.props.getSongs()}>Add Song</button></td>
                            </tr>
                            <tr>
                            <td><label>Artist Name</label></td>
                            <td><input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td><label>Album Name</label></td>
                            <td><input type="text" name="album" onChange={this.handleChange} value={this.state.album}/></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td><label>Genre</label></td>
                            <td><input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td><label>Release Date</label></td>
                            <td><input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/></td>
                            <td></td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                        </thead>
                    </table>
                </div>
            </form>
         );
    }
}
 
export default CreateSong;