import React from 'react';
import TextInput from './textinput';
import {StyleSheet, css} from 'aphrodite';
import CircularLoading from '../common/loading';

class Content extends React.Component {
  render(){

    const styles = StyleSheet.create({
      common: {
        width: "60%",
        backgroundColor: "white",
        borderRadius: "10px",
        wordWrap: "break-word"
      },
      right: {
        marginLeft: "35%",
        backgroundColor: "rgb(20, 4, 120)",
        color: "white"
      },
      left: {
        marginLeft: "5%"
      }
    })
    let currentUserId = document.getElementById("object_id").getAttribute("reactdata");
    const items = [];
    const talkEach = this.props.talkData[this.props.selected];
    //talkDataそのものを変えないと変化しない
    for (let i in talkEach) {
      if (talkEach[i].user_id == currentUserId){
        items.push(
          <div key={i} className={css(styles.common, styles.right)}>
            <p>{talkEach[i].content}</p>
          </div>
        )
      }else{
        items.push(
          <div key={i} className={css(styles.left, styles.common)}>
            <p>{talkEach[i].content}</p>
          </div>
        )
      }
    }
    if (this.props.loadingTalk) {
      return( <CircularLoading /> )
    }
    if (this.props.getTalkError) {
      return( <p> error </p> )
    }

      return(
        <div>
          {items}
        </div>
      );

  }
}

export default Content;
