import React from 'react';
import {RaisedButton, TextField} from 'material-ui';

export default React.createClass({
  getInitialState : function() {
    return {lastTyped:""};
  },
  handleTyping : function(event){
    this.setState({lastTyped:event.target.value});
  },
  handleEnter : function(event){
    if (event.keyCode === 13) {
      this.props.propagate(this.state.lastTyped);
    }
  },
  propagate: function(event){
    this.props.propagate(this.state.lastTyped);
  },
  render : function(){
    // return (
    //   <form onSubmit={this.propagate}>
    //     <input className="form-component" id="gif-text"
    //       type="text" placeholder="search for a gif, bruh" onChange={this.handleClick} />
    //     <input className="form-component" id="gif-submit"
    //       type="submit" value="GIF IT UP"/>
    //   </form>
    //
    // );
    return (
      <div id="form-div">
        <TextField className="form-component"
          id="gif-entry" placeholder="search for a gif, bruh" onKeyDown={this.handleEnter}
          onChange={this.handleTyping} />
        <RaisedButton className="form-component" id="gif-submit"
          onClick={this.propagate}>GIF IT UP</RaisedButton>
      </div>
    );
  }
});
