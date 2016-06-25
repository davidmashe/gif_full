import React from 'react';

var self = this;

export default React.createClass({
  // getInitialState : function() {
  //   return {images:this.props.images};
  // },
  handleImageClick : function(event) {
    this.props.propagateImageClick(event.target.src);
  },
  unFocusGif : function(){

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
          <img src={this.getBigGif(this.props.focusImage)} className="focus-gif"
            onClick={this.unFocusGif} />
        </div>
      );
    } else {
      console.log("gifdisplay is showing five images");
      return (
        <div className="img-div">
          {this.props.imageObjects.map((currentValue,index,originalArray)=> {
             return <img src={this.getSmallGif(currentValue)} key={index} className="gif-frame"
               onClick={this.handleImageClick} />;
          })}
        </div>
      );
    }

  }
});
