import React from 'react';

function MusicList(props){

  if(props.top20.length === 0){
    return "Loading top 20 songs..."
  }

  const list = props.top20.map((song, index) => {
    const imgUrl = song['im:image'][2].label;
    return (
      <li key={index}>
        <p>{song.title.label}</p>
        <p><img src={imgUrl} alt="song cover art"/></p>
      </li>
    )
  })


  return (
    <ul>
      {list}
    </ul>
  )
}

export default MusicList;
