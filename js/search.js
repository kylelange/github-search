var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(userName, displayRepo, displayUserName) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayUserName(userName);
    for(var i = 0; i < response.length; i++){
      if (response[i].description === null) {
        displayRepo(response[i].name + " : no description given for this one.")
      } else {
        displayRepo(response[i].name, response[i].description);
      }
    }
  }).fail(function(error){
    $("#results-error").empty();
    console.log(error.responseJSON.message);
    if (error.responseJSON.message === "Not Found") {
      $("#results-error").text("Sorry, that user name does not exist on Github!");
    }
  });
};

exports.searchModule = Search;
