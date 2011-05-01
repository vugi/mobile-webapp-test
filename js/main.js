$(document).bind('deviceready',function(event, ui){
  log('PhoneGap deviceready',stop());
});

$(document).ready(function() {
  log('Document ready',stop());
  
  $('div').live('pagebeforeshow',function(event, ui){
    start();
  });
  // Count time on pageshow
  $('div').live('pageshow',function(event, ui){
    var page = $(".ui-page-active");
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
    message += "<span class='ui-li-count'><b>"+time+"</b> ms</span>";
  }
  $("#log").append("<li>"+message+"</li>"); 
  
  if (console && console.log){
    console.log(message + ": " + time);
  }
}