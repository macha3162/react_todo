import React, {Component, PropTypes} from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      place: '東京タワー'
    }
  }
  handlePlaceChange(place){
    this.setState({place: place})
  }

  hundleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.place)
  }

  render() {
    return (
      <form onSubmit={e => this.hundleSubmit(e)}>
        <input
         type="text" 
         value={this.state.place} 
         onChange={e => this.handlePlaceChange(e.target.value)} />
         <input type="submit" value="検索" />
      </form>
    )
  }
}

export default SearchForm