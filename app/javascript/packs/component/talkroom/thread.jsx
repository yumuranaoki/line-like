import React from 'react'
import {StyleSheet, css} from 'aphrodite';
import CircularLoading from '../common/loading';

class Thread extends React.Component {
  render(){
    const text = (this.props.comment.length >= 20) ? this.props.comment.slice(0,20) + '...' : this.props.comment;
    const styles = StyleSheet.create({
      thread: {
        border: "1px solid #cecece",
        height: "100px",
        padding: "10px"
      }
    })
    if (this.props.loadingThread){
      return(
          <CircularLoading />
      );
    }
    if (this.props.getThreadError) {
      return( <p> error </p> )
    }

      return(
        <div className={css(styles.thread)} onClick={this.props.onThread}>
          <div>{this.props.name}</div>
          <div>{text}</div>
        </div>
      );


  }
}

export default Thread;
