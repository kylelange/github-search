var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(userName, displayRepo, displayUserName) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayUserName(userName);
    for(var i = 0; i < response.length; i++){
      displayRepo(response[i].name, response[i].description);
    }
  }).fail(function(error){
    $("#results-error").text("error.responseJSON.message" + "! Sorry, that person does not exist on Github.");
  });
};

exports.searchModule = Search;
