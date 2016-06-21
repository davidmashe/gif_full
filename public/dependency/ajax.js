var AJAX = (function(){
  return {
    breh : "breh",
    get : function(url,successCallback){
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load",function(event){
        response = event.target.response;
        successCallback(response);
      });
      xhr.open("GET",url);
      xhr.send();
    },
    post : function(successCallback){
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load",function(event){
        response = event.target.response;
        successCallback(response);
      });
      xhr.open("POST",url);
      xhr.send();
    }
  };

})();
