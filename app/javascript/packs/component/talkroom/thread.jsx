import React from 'react'
import {StyleSheet, css} from 'aphrodite';

class Thread extends React.Component {
  render(){
    const styles = StyleSheet.create({
      thread: {
        border: "1px solid #000",
        height: "70px"
      }
    })
    return(
      <div className={css(styles.thread)} onClick={this.props.onThread}>
        <div>{this.props.name}</div>
        <div>{this.props.comment}</div>
      </div>
    );
  }
}

export default Thread;
