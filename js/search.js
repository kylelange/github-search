var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(name, displayRepo) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    //displayRepo(name, REAL-repoName, REAL-desc);
  })

  // .fail(function(error){
  //   $("#results-error").text(error.responseJSON.message);
  // });
}

exports.searchModule = Search;
