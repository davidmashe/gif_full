import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';
import AJAX from './ajax.js';
import Giphy from './constants.js';

export default React.createClass({
  getInitialState : function(){
    return {
      previewImages : ["https://media4.giphy.com/media/o0vwzuFwCGAFO/200w.gif"],
      imageObjects : null
    };
  },
  makeApiCall : function(stateObject){
    var searchTerm = stateObject.searched.split(" ").join("+"); // make the search term URL friendly
    var url = Giphy.prefix + searchTerm + Giphy.suffix;
    console.log("url is: " + url);
    AJAX.get(url,this.onGiphyResponse)
  },
  onGiphyResponse : function(response){
    var resultsArray = JSON.parse(response).data;
    console.log("results array:",resultsArray);
    var displayArray = [];
    var maxIterations = resultsArray.length > 5 ? 5 : resultsArray.length;
    for (var i = 0; i < maxIterations; i++) {
      displayArray.push(resultsArray[i].images.fixed_height.url);
    }
    this.setState({previewImages:displayArray,imageObjects:resultsArray});
  },
  render : function(){
    return (
      <div>
        <GifForm propagate={this.makeApiCall} />
        <GifDisplay images={this.state.previewImages} />
      </div>
    );
  }
});
