import React from 'react'
import ReactDOM from 'react-dom'



class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      test: []
    }
  }
  fetchData(url) {
    this.setState({isLoading: true});
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({isLoading: false});
        return response;
      })
      .then((response) => response.json())
      .then((test) => {
        console.log(test);
        console.log(this);
        this.setState({test})
      })
      .catch(() => this.setState({hasErrored: true}));
  }

  componentDidMount() {
    this.fetchData('http://localhost:3000/room/lC5RS0vefJXlGZSJDQtsx6hH87VEaTS8r1m7Olq-eclgomrSl2qsiCIscsN5Jb_LAq2Dg7zyrcdljAoO2Tyx-g/messages')
  }

  render() {
    if (this.state.hasError) {
      return <p>error</p>;
    }
    if (this.state.isLoading) {
      return <p>loading . . . </p>;
    }
    return (
      <ul>
        {this.state.test.map((item) => (
          <li key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
    )
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Test />,
    document.getElementById('talkroom-content'),
  )
})
