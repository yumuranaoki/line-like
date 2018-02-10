import React from 'react';
import {StyleSheet, css} from 'aphrodite';

class TextInput extends React.Component {
  render() {
    const styles = StyleSheet.create({
      form: {
        width: '90%',
        height: '60px',
        float: 'left'
      },
      submission: {
        width: '10%',
        height: '60px',
        float: 'left',
        backgroundColor: '#cecece'
      },
      send: {
        marginRight: "10px"
      }
    })
    return(
      <div>
        <textarea className={css(styles.form)}>
          Hello there, this is some text in a text area
        </textarea>
        <div className={css(styles.submission)}>
          <input type="submit" value="+" className={css(styles.send)} />
        </div>
      </div>
    );
  }
}

export default TextInput;
