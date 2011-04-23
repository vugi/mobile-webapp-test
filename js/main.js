$('div#mainPage').live('pagecreate',function(event){
  log('Page was created in: '+ (new Date()-startTime) + 'ms');
});

$('div').live('pagebeforeshow',function(event, ui){
  //log("pagebeforeshow");
});

$('div').live('pageshow',function(event, ui){
  log('Page was shown in: '+ (new Date()-startTime) + 'ms');
});

$(document).ready(function() {
  log('Document was ready in: '+ (new Date()-startTime) + 'ms');
});

$(document).bind('deviceready',function(event, ui){
  log('Deviceready: '+ (new Date()-startTime) + 'ms');
});

function start(){
  console.log("start timer");
  startTime = new Date();
}

function log(message){
  $("#log").append("<p>"+message+"</p>");
}