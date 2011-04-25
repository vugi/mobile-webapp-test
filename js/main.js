$(document).bind('deviceready',function(event, ui){
  log('PhoneGap deviceready in: '+ stop() + 'ms');
});

$(document).ready(function() {
  log('Document ready in: '+ stop() + 'ms');
  
  $('div').live('pagebeforeshow',function(event, ui){
    start();
  });

  $('div').live('pageshow',function(event, ui){
    console.log();
    var page = $(".ui-page-active");
    var type = page.hasClass("ui-dialog") ? "Dialog" : "Page";
    var time = stop();
    log(type+" " + page.data("url") + " shown in " + time + "ms");
  });
  
  $('#logPage').live('pageshow',function(event, ui){
    $("#log").listview('refresh');
  });
});

function start(){
  startTime = new Date();
}

function stop(){
  var diff = new Date()-startTime;
  return diff;
}

function log(message){
  $("#log").append("<li>"+message+"</li>");
  console.log(message);
}