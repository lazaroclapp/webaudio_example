var context = new window.webkitAudioContext();

function startRecording() {
    navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.getUserMedia;
    navigator.getUserMedia({audio: true}, onAudioSupported, onAudioUnsupported);
}

function onAudioSupported(stream) {
    $("#voice").src = window.webkitURL.createObjectURL(stream);
}

function onAudioUnsupported(e) {
    window.alert("Web audio API not supported by your lame lame browser. BUUUUH!");
    console.log(e);
}
