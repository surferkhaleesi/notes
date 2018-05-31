import React, { Component } from 'react';
import './App.css';

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
        console.log(this.state.topics);
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
