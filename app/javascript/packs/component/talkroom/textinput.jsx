import React from 'react';
import {StyleSheet, css} from 'aphrodite';

class TextInput extends React.Component {
  handleClick() {
    let text = this.refs.textarea.value;
    console.log(this.props.nowThreadData);
    console.log(this.props.nowThreadData['user_id']);
    console.log(this.props.nowThreadData['id']);
    console.log(this.props.nowThreadData['user']);
    if (text != ''){
      App.room.speak(text, this.props.nowThreadData['user_id'], this.props.nowThreadData['user'], this.props.nowThreadData['id']);
      this.refs.textarea.value = '';
    }
  }

  render() {

    const styles = StyleSheet.create({
      form: {
        width: '90%',
        height: '96%',
        paddingButtom: '-6px',
        float: 'left'
      },
      submission: {
        width: '10%',
        marginTop: '15px',
        height: '30px',
        float: 'left',
        backgroundColor: '#cecece'
      },
      all: {
        paddingTop: '2%',
        paddingLeft: '2%',
        paddingRight: '2%'
      }
    })



    return(
      <div className={css(styles.all)}>
        <textarea className={css(styles.form)} ref="textarea">

        </textarea>
        <button className={css(styles.submission)} onClick={() => this.handleClick()}>
          ▶
        </button>
      </div>
    );
  }
}

export default TextInput;
