var Search = require('./../js/search.js').searchModule;

//Display functions here
var displayRepo = function(repoName, desc){
  $("#display-repo").text(repoName + " is an app about " + desc + ".");
};

//submit function here
$(document).ready(function() {
  $("form-name").submit(function(){
    //debugger;
    event.preventDefault();
    $("#output-results").empty();
    var newSearch = new Search();
    var userName = $("#name-input").val();
    newSearch.getRepoDesc(name, displayRepo);
    $("#results-header").show();
    console.log(userName);
    console.log(newSearch);
  });
});
