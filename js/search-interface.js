var Search = require('./../js/search.js').searchModule;

//Display Callback function/s here
var displayUserName = function(userName){
  $("userName-display").empty();
  $("#userName-display").text(userName + "'s repos:");
};

var displayRepo = function(repoName, desc){
  $("#display-repo").append("<li>" + repoName + " is an app about " + desc + ".</li>");
  //put actual links to repos by manipulating the dom w/ <a> inside a <div>.  desc will need to be <p> instead
};


//submit function here
$(document).ready(function() {
  $(".form-name").submit(function(){
    event.preventDefault();
    $("userName-display").empty();
    $("#display-repo").empty();
    var newSearch = new Search();
    var userName = $("#name-input").val();
    newSearch.getRepoDesc(userName, displayRepo, displayUserName);
    $("#results-header").show();
  });
});
