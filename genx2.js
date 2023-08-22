function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mukesh.mishra@genxelevator.com",
        Password : "606C054A521465B3CA96A910F558165C0DC7",
        To : 'mukesh.mishra@genxelevator.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No: " + document.getElementById("phone number").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
