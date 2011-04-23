$(document).bind('deviceready',function(event, ui){
  log('PhoneGap deviceready in: '+ stop() + 'ms');
});

$(document).ready(function() {
  log('Document ready in: '+ stop() + 'ms');
  
  $('div').live('pagebeforeshow',function(event, ui){
    start();
  });

  $('div').live('pageshow',function(event, ui){
    $("#timer").html(stop());
  });
});

function start(){
  console.log("start timer");
  startTime = new Date();
}

function stop(){
  var diff = new Date()-startTime;
  console.log("stop timer in " + diff);
  return diff;
}

function log(message){
  $("#log").append("<p>"+message+"</p>");
  console.log(message);
}