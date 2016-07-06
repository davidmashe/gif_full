import AppDispatcher from '../dispatcher/AppDispatcher';
import GifConstants from ('../constants/constants';
import Giphy from '../constants/Giphy';
import assign from 'object-assign';
import AJAX from './ajax.js';

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  imageObjects: [{
      images:{
        fixed_height:{url: "https://media4.giphy.com/media/o0vwzuFwCGAFO/200w.gif"}
      }
    }],
    focusImage : null
};

function setResults(input) {
  _state.imageobjects = input;
}

function setFocus(urlString){
  _state.focusImage = urlString;
}

var makeApiCall = function(string){
  GifActions.search(string);
  var searchTerm = string.split(" ").join("+");
  var url = Giphy.prefix + searchTerm + Giphy.suffix;
  AJAX.get(url,onGiphyResponse);
};

var focusImage = function(imageUrl){
  var targetedObject = null;
  var list = this.state.imageObjects;
  for (var i = 0; i < list.length; i++) {
    if (getUrl(list[i]) === imageUrl){
      targetedObject = list[i];
    }
  }

  this.setFocus(targetedObject);
};

var getUrl = function(object){
  return object.images.fixed_height.url;
};

var unFocusImage = function(){
  this.setState({imageObjects:this.state.imageObjects,focusImage:null}); // TODO - fix
};

var onGiphyResponse = function(response){
  var resultsArray = JSON.parse(response).data;
  var displayArray = [];
  var maxIterations = resultsArray.length > 5 ? 5 : resultsArray.length;
  for (var i = 0; i < maxIterations; i++) {
    displayArray.push(resultsArray[i]);
  }
  this.setState({imageObjects:displayArray,focusImage:null}); // TODO - fix
  TodoStore.emitChange();
};


var GifStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    console.log("Gif Store emitting change");
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getImageObjects : function(){
    return _state.imageObjects;
  },

  getFocusImage : function(){
    return _state.focusImage;
  },
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var searched;
  var focusImage;

  if(action.actionType === GifConstants.GIF_SEARCH) {
      searched = action.searched.trim();
      if (searched !== '') {
        // TODO - make API call
        // setResults(searched);
        // GifStore.emitChange();
      }
  }
  else if (action.actionType ===  GifConstants.GIF_FOCUS){
    focusImage = action.focusImage.trim();
    if (focusImage !== '') {
      // TODO - call the right method above to grab object based on focusImage
      // setFocus(focusImage);
      GifStore.emitChange();
    }
  } else if (action.actionType ===  GifConstants.GIF_UNFOCUS){

  }
});

module.exports = GifStore;
