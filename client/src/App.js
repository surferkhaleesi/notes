import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    topicForms: false,
    topicInputForm: "",
    topics:[]
  }
  // componentDidMount(){
  //   // fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));
  // }
  render() {
    let topicForm

    if (this.state.topicForms){
      topicForm = <form onSubmit={(event) => this.saveToPage(event)}>
        <input onChange={(e) => this.setTopicName(e)} placeholder="Insert Topic Name" />
        <input type="submit" value="Go" />
      </form>
    } else {
      topicForm = null
    }

    return (
      <div className="App">
        <h1>Notes App</h1>
        <button onClick={() => this.showNewTopicform()}> Create New Topic</button>
        {topicForm}
        <ul>{this.state.topics.map((t)=><div><button>Edit Topic Title!</button>{t}<button>Take Me To ToPICS pAGE!</button></div>)}</ul>
      </div>
    );
  }
  showNewTopicform(){
    this.setState({topicForms: true});
  }
  saveToPage(event){
    event.preventDefault();
    this.setState({
      topics: this.state.topics.concat([this.state.topicInputForm]),
      topicForms:false
    })

  }
  setTopicName(e){
    this.setState({topicInputForm: e.target.value})
  }
}

export default App;
