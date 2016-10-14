var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(userName, displayRepo) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    //displayRepo(userName, REAL-repoName, REAL-desc);
  })

  // .fail(function(error){
  //   $("#results-error").text(error.responseJSON.message);
  // });
}

exports.searchModule = Search;
