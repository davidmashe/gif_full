import React from 'react';
import {RaisedButton, TextField} from 'material-ui';

export default React.createClass({
  getInitialState : function() {
    return {lastSearched:""};
  },
  handleClick : function(event){
    this.setState({lastSearched:event.target.value});
  },
  propagate: function(event){
    event.preventDefault(); // forms want to reload the page on submit, that's a no-no for us
    this.props.propagate({searched:this.state.lastSearched});
  },
  render : function(){
    return (
      <form onSubmit={this.propagate}>
        <input className="form-component" id="gif-text" 
          type="text" placeholder="search for a gif, bruh" onChange={this.handleClick} />
        <input className="form-component" id="gif-submit"
          type="submit" value="GIF IT UP"/>
      </form>

      // <form onSubmit={this.propagate}>
      //   <TextField type="text" placeholder="search for a gif, bruh" onChange={this.handleClick} />
      //   <RaisedButton type="submit" label="GIF IT UP" />
      // </form>

    );
  }
});
