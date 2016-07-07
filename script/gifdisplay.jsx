import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var self = this;

export default React.createClass({
  // getInitialState : function() {
  //   return {images:this.props.images};
  // },
  handleImageClick : function(event) {
    this.props.propagateImageClick(event.target.src);
  },
  unFocusGif : function(){
    this.props.unFocusImage();
  },
  getSmallGif(object){
    return object.images.fixed_height.url;
  },
  getBigGif(object){
    return object.images.original.url;
  },
  render : function(){
    if (this.props.focusImage){
      // match the focus url to a gif Object, get a bigger gif url from that object
      return (

        <div className="img-div">
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={2000} transitionLeaveTimeout={200}>
          <img src={this.getBigGif(this.props.focusImage)} className="focus-frame"
            onClick={this.unFocusGif} />
          </ReactCSSTransitionGroup>
        </div>
      );
    } else {
      var items = this.props.imageObjects.map((currentValue,index,originalArray)=> {
                   return <img src={this.getSmallGif(currentValue)} key={index} className="gif-frame"
                     onClick={this.handleImageClick} />;
                 });
      return (
        <div className="img-div">
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={2000} transitionLeaveTimeout={200}>
            {items}
        </ReactCSSTransitionGroup>
        </div>
      );
    }

  }
});
