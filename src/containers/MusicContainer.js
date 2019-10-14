import React, {Component} from 'react';
import MusicList from '../components/MusicList.js';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      top20: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({top20: data.feed.entry}))
    .catch(err => console.error(err))
  }


  render(){
    return(
      <div>
        <h2>Top 20 i-Tunes Songs:</h2>
        <MusicList top20={this.state.top20} />
      </div>
    )
  }
}

export default MusicContainer;
