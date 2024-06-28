function goToURL() {
    var url = document.getElementById('url-input').value;
    var iframe = document.getElementById('webview');
    iframe.src = validateURL(url);
}

function validateURL(url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    } else {
        return 'about:blank'; 
    }
}
