import React from 'react';

export default React.createClass({
  render : function(){
    return (
      <div>
        {this.props.images.map(function(result) {
           return <img src={result} />;
        })}
      </div>
    );
  }
});
