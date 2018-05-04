function setCookie (key, value, expireDate, path) {
    var date = new Date();
    date.setDate(date.getDate() + expireDate);
    document.cookie(key + "=" + value + ";expires=" + date + ";path=" + path);
}

function getCookie (key) {
    var wholeCookie = document.cookie;
    var cookieItem = wholeCookie.split("; ");
    for (var i = 0; i < cookieItem.length; i++) {
        var singleCookie = cookieItem[i].split("=");
        if (key == singleCookie[0]) {
            return singleCookie[1];
        }
    }
    return "";
}

function removeCookie(key, path) {
    setCookie (key, null, -1, path);
}