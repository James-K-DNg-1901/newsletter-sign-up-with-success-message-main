var email = document.getElementById("e-in");
var submit = document.getElementById("sub-btn");
var dismiss = document.getElementById("dismiss-btn");
var main = document.getElementById("deal-register");
var notify = document.getElementById("completed-notify");

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

submit.addEventListener("click", function complete() {
    if (email.value == "") {
        document.getElementById("warning").style.visibility = "visible";
        email.classList.add("error");
    } else {
        if (email.value.match(filter)) {
            document.getElementById("warning").style.visibility = "hidden";
            email.classList.remove("error");
            document.getElementById("show-e").innerText = email.value;
            main.hidden = true;
            notify.hidden = false;
        } else {
            document.getElementById("warning").style.visibility = "visible";
            email.classList.add("error");
        }
    }
});

dismiss.addEventListener("click", function dismiss() {
    main.hidden = false;
    notify.hidden = true;
    email.value = "";
});
