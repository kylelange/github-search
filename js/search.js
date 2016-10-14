var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(userName, displayRepo) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    //displayRepo(name, REAL-repoName, REAL-desc);
  })

  // .fail(function(error){
  //   $("#results-error").text(error.responseJSON.message);
  // });
}

exports.searchModule = Search;
