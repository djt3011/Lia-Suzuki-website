$(".faqampm-q").click( function () {
  var container = $(this).parents(".faqampm-c");
  var answer = container.find(".faqampm-a");
  var trigger = container.find(".faqampm-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faqampm-o")) {
    trigger.removeClass("faqampm-o");
  }
  else {
    trigger.addClass("faqampm-o");
  }
});