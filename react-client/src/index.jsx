import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Posts from './components/Posts'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      favorites: [],
    }
  this.getPosts = this.getPosts.bind(this)  
  this.handleFavorite = this.handleFavorite.bind(this)
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts() {
   axios.get('http://localhost:3000/db')
    .then( (response) => {
      console.log(response)
      this.setState({
        posts: response.data.posts
      })
    })
    .catch(function (err) {
      console.log(err)
    });
  }

  handleFavorite() {
    console.log('favorite')
  }

  render() {
    return (
      <div>
        <div><h3>Active Tags</h3></div>
        <Posts posts ={this.state.posts} handleFavorite={this.handleFavorite} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
