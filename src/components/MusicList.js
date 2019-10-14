import React from 'react';
import './MusicList.css';

function MusicList(props){

  if(props.top20.length === 0){
    return "Loading top 20 songs..."
  }

  let counter = 0;
  const list = props.top20.map((song, index) => {
    counter += 1;
    const imgUrl = song['im:image'][2].label;
    const audioUrl = song.link[1].attributes.href;
    return (
      <div className="song" key={index}>
        <p>Chart position:</p>
        <h2 id="count">{counter}</h2>
        <h3>Song: {song["im:name"].label}</h3>
        <p>Artist: {song['im:artist'].label}</p>
        <p><img src={imgUrl} alt="song cover art"/></p>
        <p>Click play to preview:</p>
        <audio src={audioUrl} controls></audio>
      </div>
    )
  })


  return (
    <div id="song-list">
      {list}
    </div>
  )
}

export default MusicList;
