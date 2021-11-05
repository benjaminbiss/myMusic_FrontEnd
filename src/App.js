import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
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

    render() { 
        console.log(this.state.songs)
        return ( 
            <div>
                <h1>myMusic Library</h1>
                {this.state.songs.length > 0 &&
                <DisplaySongs songs={this.state.songs} />
                }
            </div>
         );
    }
}
 
export default App;