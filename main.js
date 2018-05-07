var expiration = "";

function tick() {

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getName() {
    var name = getUrlVars()["name"];

    if(name.match(/^[0-9a-zA-Z]{1,32}$/)){
        return name;
    }
    else {
        console.log("Rejected Name.");
        return "";
    }
}

function getPhoto() {
    var photo = getUrlVars()["photo"];

    if(photo.match(/^[0-9a-zA-Z:/\.\-_\(\)]+$/)){
        return photo;
    }
    else {
        console.log("Rejected Photo.");
        return "";
    }
}

function getExpiration() {
    var expiration = getUrlVars()["expiration"];

    if(expiration.match(/^[0-9,]+$/m)){
        return expiration;
    }
    else {
        console.log("Rejected Expiration.");
        return "";
    }
}

function revealExpiration() {
    $("#headshot").css("display", "none");
    $("#name").css("display", "none");
    $("#revealExpiration").css("display", "none");
    $("#expiration").css("display", "inline");

    expiration = getExpiration();

    if(expiration == "") {
        //default is 12 hours.  Like the first date in the show
        expiration = "0,0,0,12,0,0";
    }

    setInterval(function() {
        tick();
    }, 1000);
}

$(document).ready(function() {
    var photo = getPhoto();
    if(photo != "") {
        $("#headshot").attr("src", photo);
    } else {
        $("#headshot").css("display", "none");
    }
    
    var name = getName();
    if(name != "") {
        $("#name").html(getName());
    } else {
        $("#name").css("display", "none");
    }
    
    $("#revealExpiration").click(function() {
        revealExpiration();
    });
});