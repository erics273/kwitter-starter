import React, { Component } from "react";
import Message from "../message/Message";
import SocialAppService from "../../socialAppService";
import "./MessageFeed.css";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "50%",
    backgroundColor: "rgb (233, 208, 144)"
  },
  inline: {
    display: "inline"
  }
});

class MessageFeed extends Component {

  constructor(props) {
    super(props);
    this.client = new SocialAppService();
  }
  
  render() {
    const { classes } = this.props;

    let messages = this.props.messages.map(message => {
      return (
        <React.Fragment key={message.id}>
          <Message
            username={message.username}
            text={message.text}
            likes={message.likes}
            client={this.client}
            id={message.id}
            getMessageHandler={this.props.getMessageHandler}
          />
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });

    return (
      <div>
        <h1>Comments</h1>
        <List className={classes.root}>{messages}</List>
      </div>
    );
  }

}

export default withStyles(styles)(MessageFeed);
