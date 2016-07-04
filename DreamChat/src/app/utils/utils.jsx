export function httpPost(url, data, headers, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("POST", url, true);
    buildStandardHeader(xmlHttp);
    xmlHttp.send(null);
}

export function buildHeader(request, authToken) {
    if (authToken != undefined) {
        request.setRequestHeader("token", authToken);
    }
}