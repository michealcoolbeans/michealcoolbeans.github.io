function contact() {
    var script_url = https://script.google.com/macros/s/AKfycbwKt-OR6TBPlYsmajIXqDhY_SNCYvxVfM_exYtOpNCjY7QhikLFNb0VE7Fdz-9pr_M/exec;

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject="
        + encodeURIComponent(subject) + "&message=" + + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp",
    });
}
function thanks(e) {
    alert("Thank you, I'll respond as soon as possible");
}

