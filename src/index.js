import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyALxwZgCdmHv3vV-80AVk6gfQHwrJuQi5s';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selected: null
     };
    this.videoSearch('surfbards');
  }

  videoSearch (term) {
    YTsearch({key: API_KEY, term: term},(videos) => {
      this.setState({
        videos: videos,
        selected: videos[0]
      })
      // this.setState({ videos }); //only used when the state variable name is same like youtube data name.
      // this.setState({ videos: videos });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selected}/>
        <VideoList
        onVideoSelect={selected => { this.setState({selected})}}
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
