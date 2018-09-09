import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongDetails from './components/SongDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: '',
      artist: '',
      title: ''
    };
  }


  getLyrics(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(response => response.json())
      .then(myJson => this.setState({ 
        lyrics: myJson.lyrics,
        artist: artist,
        title: title
       }))
       .catch(error => console.error('Error:', error));
  }


  render() {
    return (
      <div className="App">
        <SearchBar onSearchChanged={(artist, title) => this.getLyrics(artist, title)} />
        <br />
        <SongDetails lyrics={this.state.lyrics}
          artist={this.state.artist}
          title={this.state.title} />
      </div>
    );
  }
}

export default App;
