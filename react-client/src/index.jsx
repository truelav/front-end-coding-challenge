import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Posts from './components/Posts'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from './components/Home'
import Favorites from './components/Favorites'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      favorites: [],
      activeFilter = false,
      activeTag: '',
    }
  this.getPosts = this.getPosts.bind(this)  
  this.handleFavorite = this.handleFavorite.bind(this)
  this.handleTags = this.handleTags.bind(this)
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts() {
   axios.get('http://localhost:3000/db')
    .then( (response) => {
      this.setState({
        posts: response.data.posts
      })
    })
    .catch(function (err) {
      console.log(err)
    });
  }

  handleFavorite(post) {
    this.state.favorites.push(post);
  }

  handleTags(tag) {
    let filteredPosts  = this.state.posts.filter( post => {
      return  post.tags.forEach( myTag => {
        if (myTag === tag) {
          return true
        }
        return false
      })
    })

    this.setState({
      activeTag: tag,
      posts: filteredPosts
    })
    
   console.log(this.state)
  }


  render() {
    return (
      <div>
        <a href="/favorites"><button>Favorites</button></a>
        <div className="active-tag"><h3>Active Tags:</h3><button className="tag-button">{this.state.activeTag}</button></div>
        <Posts posts ={this.state.posts} handleFavorite={this.handleFavorite} handleTags={this.handleTags}/>
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
