var audio_id;

function recordVideo() {
    $('#hiddenInput').click();
}

function uploadVideo() {
    var vFD = new FormData(document.getElementById('video_upload_form'));
	var oXHR = new XMLHttpRequest();        
    oXHR.addEventListener('load', uploadFinish, false);
    oXHR.open('POST', 'upload_videos_audio.php');
    oXHR.send(vFD);
}
	    
function uploadFinish(e) {
    audio_id = parseInt(e.target.responseText);
    $("#videoAudio").src = "audio_file.php?audio_id=" + audio_id;
    $("#record_audio_button").hide();
    $("#play_audio_button").show();
}

function playbackAudio() {
    $("#play_audio_button").play();
}
