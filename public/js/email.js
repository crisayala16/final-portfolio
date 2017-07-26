var myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "portEmail";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){ 
      alert("Sent!");
      $('#name-input').val('');
      $('#email-input').val('');
      $('#textArea').val('');
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});