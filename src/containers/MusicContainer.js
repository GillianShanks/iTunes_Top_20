import React, {Component} from 'react';
import MusicList from '../components/MusicList.js';
import './MusicContainer.css';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      everything:{},
      top20: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        everything: data.feed,
        top20: data.feed.entry
      })
    })
    .catch(err => console.error(err))
  }


  render(){
    // console.log(this.state.everything.author.uri);

    const itunesUrl = 'http://www.apple.com/uk/itunes/';
    const itunesLogo = 'http://itunes.apple.com/favicon.ico';
    return(
      <div>
        <div id="header">
        <a href={itunesUrl}><img id="itunes" src={itunesLogo} alt="itunes logo"/></a>

        <h2>Top 20 i-Tunes Songs</h2>
        </div>
        <MusicList top20={this.state.top20} />
      </div>
    )
  }
}

export default MusicContainer;
