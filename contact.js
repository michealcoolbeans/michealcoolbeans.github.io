function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbziLH1yLYeMFIIjksJy1vX3BtqfnVgUXCKhFtJfvvBYhqyokCR4XlkI0CA0y4ZbhU-M/exec";

    var name = $("naame").val();
    var email = $("email").val();
    var subject = $("subject").val();
    var message = $("message").val();

    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject="
        + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}
function thanks(e) {
    alert("Thank you, I'll respond as soon as possible");
}

