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
    $("#wavSource").attr('src',
        "audio_file.php?audio_id=" + audio_id)
        .detach().appendTo($("#videoAudio"));
    $("#record_audio_button").hide();
    $("#play_audio_button").show();
}

function playbackAudio() {
    $("#videoAudio").get(0).play();
}
