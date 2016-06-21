import React from 'react';

export default React.createClass({
  getInitialState : function() {
    return {};
  }
  passUpward: function(event){
    event.preventDefault(); // forms want to reload the page on submit, that's a no-no for us
    this.props.passUpward({searched:this.state.searched});
  },
  render : function(){
    return (
      <form onSubmit={this.passUpward}>
        <input type="text" placeholder="search for a gif, bruh"/>
        <input type="submit" vaue="GIF IT UP"/>
      </form>
    );
  }
});
