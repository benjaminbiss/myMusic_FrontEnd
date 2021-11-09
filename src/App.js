import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
         }
    }

    componentDidMount(){
        this.getSongs()
        console.log(this.state.sortBy)
    }

    
    getSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
    }
    
    set() {
        this.deleteRow();
        this.getSongs();
    }

    deleteRow = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            this.getSongs();
        }
        catch(event){
            console.log(event);
        }
    }

    render() { 
        return ( 
            <div class='container'>
                <NavBar />
                <div>
                {this.state.songs.length > 0 &&
                <DisplaySongs songs={this.state.songs} delete={this.deleteRow} sortSongs={this.sortSongs}/>
                }
                </div>
                <div>
                <CreateSong getSongs={this.getSongs}/>
                </div>
            </div>
         );
    }
}
 
export default App;