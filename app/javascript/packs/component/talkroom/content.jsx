import React from 'react';
import TextInput from './textinput';

class Content extends React.Component {
  render(){
    const items = [];
    const talkEach = this.props.talkData[this.props.selected];
    console.log(this.props);
    console.log(talkEach[0])
    //talkDataそのものを変えないと変化しない
    for (let i in talkEach) {
      items.push(
        <div key={i}>
          <p>{talkEach[i].content}</p>
        </div>
      )
    }
    return(
      <div>
        {items}
      </div>
    );
  }
}

export default Content;
