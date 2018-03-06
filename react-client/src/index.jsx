import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
    }
  this.getPosts = this.getPosts.bind(this)  
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts() {
   axios.get('http://localhost:3000/db')
    .then( (response) => {
      console.log(response)
      this.setState({
        tasks: response.data
      })
    })
    .catch(function (err) {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
