var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var GifConstants = require('../constants/constants.js');

var GifActions = {

  search : function(searchTerm){
    GifConstants.dispatch({
      actionType: GifConstants.GIF_SEARCH,
      searched: searchTerm
    });
  },
  focus : function(url){
    GifConstants.dispatch({
      actionType: GifConstants.GIF_FOCUS,
      focusImage: url
    });
  }



};

module.exports = GifActions;
