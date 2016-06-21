import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';
import {Prefix, Suffix} from './constants.js';

export default React.createClass({
  getInitialState : function(){
    return {
      images : ["https://media4.giphy.com/media/o0vwzuFwCGAFO/200w.gif"],
      searchTerm : null
    };
  },
  handleSubmit : function(){
    makeApiCall(this.state.searchTerm);
  }
  makeApiCall : function(searchTerm){
    var searchTerm = object.searched.split(" ").join("+"); // make the search term URL friendly
    var url = Prefix + searchTerm + Suffix;
    AJAX.get(url,this.onGiphyResponse)
  },
  onGiphyResponse : function(response){
    var resultsArray = JSON.parse(string).data;
    var displayArray = [];
    var maxIterations = resultsArray.length > 5 ? 5 : resultsArray.length;
    for (var i = 0; i < maxIterations; i++) {
      displayArray.push(resultsArray[i].images.original.url);
    }
    this.setState({images : displayArray});
  },
  render : function(){
    return (
      <div>
        <GifForm passUpward={this.handleSubmit} />
        <GifDisplay images={this.state.images}/>
      </div>
    );
  }
});
