$(document).bind('deviceready',function(event, ui){
  log('PhoneGap deviceready in: '+ stop() + 'ms');
});

$(document).ready(function() {
  log('Document ready',stop());
  
  $('div').live('pagebeforeshow',function(event, ui){
    start();
  });

  $('div').live('pageshow',function(event, ui){
    console.log();
    var page = $(".ui-page-active");
    var type = page.hasClass("ui-dialog") ? "Dialog" : "Page";
    var time = stop();
    log(page.data("url"),time);
  });
  
  $('#logPage').live('pageshow',function(event, ui){
    $("#log").listview('refresh');
    // count average time
    var total = 0;
    var amount = 0;
    $("#log li b").each(function(i){
      total += parseInt($(this).html());
      amount++;
    });
    $("#average").html(Math.round(total/amount));
  });
});

function start(){
  startTime = new Date();
}

function stop(){
  var diff = new Date()-startTime;
  return diff;
}

function log(message,time){
  if(time){
    console.log(message + ": " + time);
    message += "<span class='ui-li-count'><b>"+time+"</b> ms</span>";
  } else {
    console.log(message)
  }
  $("#log").append("<li>"+message+"</li>");
  
}