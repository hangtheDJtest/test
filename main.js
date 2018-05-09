var expiration = "";
var tickInterval;

function tick() {
    expiration[expiration.length - 1]--;

    var outOfTimeMan = true;
    for(var i = expiration.length - 1; i > 2; i--) {
        if(expiration[i] != 0) {
            outOfTimeMan = false;
            break;
        }
    }

    if(outOfTimeMan == false) {
        for(var i = expiration.length - 1; i > 2; i--) {
            if(expiration[i] < 0) {
                if(i > 3) {
                    expiration[i] = 59;
                } else {
                    expiration[i] = 0;
                }
                expiration[i - 1]--;
            }
        }
    } else {
        clearInterval(tickInterval);
    }

    $("#expiration").html(expiration[3].toString().padStart(2,0) + ":" + expiration[4].toString().padStart(2,0) + ":" + expiration[5].toString().padStart(2,0) + "<br><span>hours</span>");
}

function displayInitialExpiration() {
    expiration = expiration.split(",");

    var mostSignificantNumber = -1;

    for(var i = 0; i < expiration.length; i++) {
        expiration[i] = parseInt(expiration[i]);
        if(expiration[i] != 0) {
            mostSignificantNumber = i;
            break;
        }
    }

    if(mostSignificantNumber == -1) {
        expiration = [0, 0, 0, 12, 0, 0];
        mostSignificantNumber = 3;
        console.log("Rejected Expiration.");
    }

    var plural = "";
    if(expiration[mostSignificantNumber] > 1) {
        plural += "s";
    }

    var time = " ";

    switch (mostSignificantNumber) {
        case 0:
            time += "year";
            break;
        case 1:
            time += "month";
            break;
        case 2:
            time += "day";
            break;
        case 3:
            time += "hour";
            break;
        case 4:
            time += "minute";
            break;
        case 5:
            time += "second";
            break;
    }

    $("#expiration").html(expiration[mostSignificantNumber] + time + plural);

    if(mostSignificantNumber >= 3) {
        setTimeout(function() {
            expiration[expiration.length - 1]++;
            tickInterval = setInterval(function() {
                tick();
            }, 1000);
        }, 3000);
    }
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

    if((name != undefined) && (name.match(/^[0-9a-zA-Z]{1,32}$/))) {
        return name;
    }
    else {
        console.log("Rejected Name.");
        return "";
    }
}

function getPhoto() {
    var photo = getUrlVars()["photo"];

    if((photo != undefined) && (photo.match(/^[0-9a-zA-Z:/\.\-_\(\)]+$/))) {
        return photo;
    }
    else {
        console.log("Rejected Photo.");
        return "";
    }
}

function getExpiration() {
    var expiration = getUrlVars()["expiration"];

    if((expiration != undefined) && (expiration.match(/^[0-9,]+$/m))) {
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
    $("#expiration").css("display", "inline-block");
    $("#helper").css("display", "inline-block");

    expiration = getExpiration();

    if(expiration == "") {
        //default is 12 hours.  Like the first date in the show
        expiration = "0,0,0,12,0,0";
    }

    displayInitialExpiration();
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
    
    $("#fingerprint").on('click touchstart', function() {
        revealExpiration();
    });
});