import React from 'react';

var self = this;

export default React.createClass({
  // getInitialState : function() {
  //   return {images:this.props.images};
  // },
  handleImageClick : function(event) {
    console.log(event.target);
    // this.props.propagateImageClick(event.target);
  },
  render : function(){
    return (
      <div className="img-div">
        {this.props.images.map((currentValue,index,originalArray)=> {
           return <img src={currentValue} key={index} className="gif-frame" onClick={this.handleImageClick}/>;
        })}
      </div>
    );
  }
});
