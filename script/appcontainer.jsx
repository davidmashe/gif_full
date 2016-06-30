import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';
import AJAX from './ajax.js';
import Giphy from './constants.js';
import {RaisedButton, TextField} from 'material-ui';


export default React.createClass({
  getInitialState : function(){
    return {
      imageObjects : [{
        images:{
          fixed_height:{url: Giphy.previewImage}
        }
      }],
      focusImage:null
    };
  },
  makeApiCall : function(stateObject){
    var searchTerm = stateObject.searched.split(" ").join("+"); // make the search term URL friendly
    var url = Giphy.prefix + searchTerm + Giphy.suffix;
    AJAX.get(url,this.onGiphyResponse);
  },
  focusImage : function(imageUrl){
    var targetedObject = null;
    var list = this.state.imageObjects;
    for (var i = 0; i < list.length; i++) {
      if (this.getUrl(list[i]) === imageUrl){
        targetedObject = list[i];
      }
    }
    this.setState({imageObjects:this.state.imageObjects,
      focusImage:targetedObject});
  },
  getUrl : function(object){
    return object.images.fixed_height.url;
  },
  unFocusImage : function(){
    this.setState({imageObjects:this.state.imageObjects,focusImage:null});
  },
  onGiphyResponse : function(response){
    var resultsArray = JSON.parse(response).data;
    var displayArray = [];
    var maxIterations = resultsArray.length > 5 ? 5 : resultsArray.length;
    for (var i = 0; i < maxIterations; i++) {
      displayArray.push(resultsArray[i]);
    }
    this.setState({imageObjects:displayArray,focusImage:null});
  },
  render : function(){
      return (
        <div>
          <TextField id="breh" placeholder="type for fun" />
          <GifForm propagate={this.makeApiCall} />
          <GifDisplay images={this.state.previewImages} focusImage={this.state.focusImage}
            propagateImageClick={this.focusImage} imageObjects={this.state.imageObjects}
            unFocusImage={this.unFocusImage}/>
        </div>
      );
  }
});
