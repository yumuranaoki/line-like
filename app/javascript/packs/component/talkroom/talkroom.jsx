import React from 'react';
import List from './list';
import Content from './content';
import TextInput from './textinput';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';


class Talkroom extends React.Component {

  componentDidMount() {
    this.props.fetchTalkData('http://localhost:3000/user_talks/10');
    this.props.fetchThreadData('http://localhost:3000/user_rooms/10');
  }

  render(){

    const styles = StyleSheet.create({
      rowcolumn: {
        padding: "0px"
      },
      scroll: {
        overflowY: "auto",
        height: "80%",
        minHeight: "100%"
      },
      height: {
        height: "100%"
      },
      border: {
        border: "1px solid #000"
      },
      positionParent: {
        position: "relative"
      },
      positionChild: {
        position: "absolute",
        width: '100%',
        bottom: '0px',
        marginButtom: "0px",
        border: '1px solid black'
      },
      eighty: {
        backgroundColor: "rgba(181, 246, 244, 0.68)"
      }
    })

    return(
      <Grid className={css(styles.height)}>
        <Row className={css(styles.height, styles.rowcolumn)}>
          <Col sm={5} className={css(styles.rowcolumn, styles.scroll, styles.border)}>
            <List
              threadData={this.props.threadData}
              onThread={ index => this.props.clickThread(index) }
              selected={this.props.selected}
            />
          </Col>
          <Col sm={7} className={css(styles.rowcolumn, styles.height, styles.border, styles.positionParent)}>
            <div className={css(styles.scroll, styles.eighty)}>
              <Content
                threadData={this.props.threadData}
                selected={this.props.selected}
                talkData={this.props.talkData}
              />
            </div>
            <div className={css(styles.positionChild)}>
              <TextInput />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Talkroom;
