$('div').live('pageshow',function(event, ui){
  $('#timer').html('Page was shown in: '+ (new Date()-startTime) + 'ms');
});