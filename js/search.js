var apiKey = require ('./../.env').apiKey;

function Search() {
}

Search.prototype.getRepoDesc = function(name, displayRepo) {
  $.get('urlhere' + name + '&more url here=' + apiKey).then(function(response){
    displayRepo(name, REAL-repoName, REAL-desc);
  })

  // .fail(function(error){
  //   $("#results-error").text(errorMessageHERE);
  // });
}

exports.searchModule = Search;
