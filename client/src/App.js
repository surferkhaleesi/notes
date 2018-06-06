import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

async function callApi(route) {
  var response = await fetch(route);
  var body = await response.json();
  return body;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicForms: false,
      topicInputForm: "",
      topics: []
    }
  }
//check if your front end makes an APi call on ComponentDidMount
  componentDidMount() {
    // callApi('/users')
    //   .then(res => {
    //     var data = JSON.parse(JSON.stringify(res));
    //     console.log(data);
    //   });
    callApi('/topics/1')
      .then(res => {
        this.setState({
          topics: res
        })
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  render() {
    let topicForm;

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
        <ul>
          {
            this.state.topics.map((t) => {
              return (<div>
                <button>Edit Topic Title!</button>
                  {t.name}
                <button>Take Me To ToPICS pAGE!</button>
              </div>)
              }
            )
          }
        </ul>
      </div>
    );

  }
  showNewTopicform(){
    this.setState({topicForms: true});
  }
  saveToPage(event){
    event.preventDefault();


    var topic = {name: this.state.topicInputForm};
    this.setState({
      topics: this.state.topics.concat([topic]),
      topicForms:false
    })
    // console.log("save to page:" + JSON.stringify(this.state.topics))
          fetch('./topics/1', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(topic)
          }).then(res => console.log(res));

  }
  setTopicName(e){
    this.setState({topicInputForm: e.target.value})
  }
}

export default App;
