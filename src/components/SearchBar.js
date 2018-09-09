import React, { Component } from 'react';
import '../SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            title: ''
        };
        this.onInpuChanged = this.onInpuChanged.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form className='container' onSubmit={this.onFormSubmit} >
                <div className='form-group row '>
                    <input
                        style={{ width: '80%', margin: '0 auto' }}
                        className='form-control'
                        placeholder='Enter an artist'
                        id='artist'
                        type='text'
                        value={this.state.artist}
                        name='artist'
                        onChange={this.onInpuChanged} />
                </div>
                <div className='form-group row '>
                    <input
                        style={{ width: '80%', margin: '0 auto' }}
                        className='form-control'
                        placeholder='Enter a song'
                        id='title'
                        type='text'
                        value={this.state.title}
                        name='title'
                        onChange={this.onInpuChanged} />
                </div>
                <div className='form-group row'>
                    <div style={{ textAlign: 'center' }}>
                        <button style={{ backgroundColor: '#555555', color: '#efefef', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}
                            className='btn ' type='submit'  >
                            Find Lyrics!
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchChanged(this.state.artist, this.state.title);
    }

    onInpuChanged(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
}

export default SearchBar;