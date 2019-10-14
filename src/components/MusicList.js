import React from 'react';

function MusicList(props){

  if(props.top20.length === 0){
    return "Loading top 20 songs..."
  }

  const list = props.top20.map((song, index) => {
    return <li key={index}>{song.title.label}</li>
  })
  return (
    <ul>
      {list}
    </ul>
  )
}

export default MusicList;
