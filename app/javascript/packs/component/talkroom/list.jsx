import React from 'react'
import Thread from './thread'
import {StyleSheet, css} from 'aphrodite';

class List extends React.Component {
  render(){
    const styles = StyleSheet.create({
      thread: {
        backgroundColor: "rgba(215, 222, 219, 0.38)"
      }
    })
    const num = this.props.selected
    const items = [];

    for (let i in this.props.threadData) {
      if (i == num){
        items.push(
          <div key={i} className={css(styles.thread)}>
            <Thread
              name={this.props.threadData[i].user}
              comment={this.props.threadData[i].comment}
              onThread={() => this.props.onThread(i)}
              loadingThread={this.props.loadingThread}
              getThreadError={this.props.getThreadError}
            />
          </div>
        )
      }else{
        items.push(
          <div key={i}>
            <Thread
              name={this.props.threadData[i].user}
              comment={this.props.threadData[i].comment}
              onThread={() => this.props.onThread(i)}
              loadingThread={this.props.loadingThread}
              getThreadError={this.props.getThreadError}
            />
          </div>
        )
      }
    }

    return(
      <div>
        {items}
      </div>
    );
  }
}

export default List;

//display: (this.props.IsOpen ? '' : 'none')
