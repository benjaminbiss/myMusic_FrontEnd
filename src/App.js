import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import CreateSong from './components/CreateSong/CreateSong';
// import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            delete: this.deleteRow,
         }
    }

    componentDidMount(){
        this.getSongs()
    }

    getSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
    }

    deleteRow = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/music/${id}`);
            this.getSongs();
        }
        catch(event){
            console.log(event);
        }
    }

    render() { 
        return ( 
            <div class='container'>
                <h1>myMusic Library</h1>
                <div class='child'>
                {this.state.songs.length > 0 &&
                <DisplaySongs songs={this.state.songs} />
                }
                </div>
                <div class='childAdd'>
                <CreateSong />
                </div>
            </div>
         );
    }
}
 
export default App;