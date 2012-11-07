<?php
    include "config.php";

    $tmp_name = $_FILES['camera-video']['tmp_name'];
    $audio_file_name = $tmp_name.".wav";

    $ffmpeg_cmd = "bin/ffmpeg -y -i ".$tmp_name." -vn ".$audio_file_name;
    if(!exec($ffmpeg_cmd))
    {
        exec("chmod ugo+x bin/ffmpeg");
        exec($ffmpeg_cmd);
    }

    $audio_content = base64_encode(file_get_contents($audio_file_name));
    $audio_size = filesize($audio_file_name);

    // the query that will add this to the database
    $addfile = "INSERT INTO audio (audio_size, audio_data) VALUES ('$audio_size', '$audio_content')";

    mysql_query($addfile) or die(mysql_error());

    // get the last inserted ID if we're going to display this audio next
    $inserted_fid = mysql_insert_id();

    mysql_close();

    echo $inserted_fid;
?>
