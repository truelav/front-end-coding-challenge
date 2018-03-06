import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Posts from './components/Posts'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import Favorites from './components/Favorites'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      favorites: [],
      activeTag: 'nothing',
    }
  this.getPosts = this.getPosts.bind(this)  
  this.handleFavorite = this.handleFavorite.bind(this)
  this.handleTags = this.handleTags.bind(this)
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts() {
   axios.get('http://localhost:3000/posts')
    .then( (response) => {
      this.setState({
        posts: response.data
      })
    })
    .catch(function (err) {
      console.log(err)
    });
  }

  handleFavorite(post) {
    this.state.favorites.push(post);
  }

  unFavorite(post){

  }

  handleTags(tag) {

    this.setState({
      activeTag: tag,
    })
    
  }


  render() {
    return (
      <div>
        <a href="/favorites"><button>Favorites</button></a>
        <div className="active-tag"><h3>Active Tags:</h3><button className="tag-button">{this.state.activeTag}</button></div>
        <Posts posts ={this.state.posts} handleFavorite={this.handleFavorite} handleTags={this.handleTags}/>
        {/* <Favorites posts={this.state.favorites}/> */}
        {/* <Switch>
          <Route exact path='/' component={Posts}/>
          <Route path='/favorites' component={Favorites}/>
        </Switch> */}
        <style>
        {`
          .active-tag {
            display: flex;
          }
          .tag-button {
            height: 30px;
          }
        `} 
        </style>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
