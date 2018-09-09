import React from 'react';

const SongDetails = (props) => {
    if (!props.artist || !props.title || !props.lyrics) {
        return <div></div>
    }
    return (
        <div className='container'>
            <h4 style={{ color: '#3d3a3a', fontWeight: 'bold', margin: '0 auto' , width: '80%' }}>{props.artist} </h4>
            <h5 style={{ color: '#3d3a3a', fontWeight: 'bold', margin: '0 auto' , width: '80%' }}>{props.title}</h5>
            <br />
            <p style={{ color:'#efefef', fontWeight: 'bold', fontSize: '18px', margin: '0 auto', width: '80%' }} >{props.lyrics}</p>
        </div>
    );
}

export default SongDetails;