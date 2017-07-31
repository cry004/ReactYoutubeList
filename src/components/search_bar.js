import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }
  render(){
    const placeholder = 'Video title ...'
    return (
        <div className="search-bar">
          <input placeholder={placeholder}
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
        </div>
    )
  }

  onInputChange(term){
      this.setState({ term });
      this.props.onSearchTermChange(term);
  }

  // render() {
  //   return <input onChange={this.onInputChange}/>;
  // }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

// const SearchBar = () => {
//   return <input />
// };

export default SearchBar;
