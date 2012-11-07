<?php
    include "config.php";
    if(isset($_GET['audio_id']))
    {
        // query the server for the picture
        $fid = $_GET['audio_id'];
        $query = "SELECT * FROM audio WHERE audio_id = '$fid'";
        $result  = mysql_query($query) or die(mysql_error());

        // define results into variables
        $size=mysql_result($result,0,"audio_size");
        $content=mysql_result($result,0,"audio_data");
        $content=base64_decode($content);

        // give our picture the proper headers...otherwise our page will be confused
        header("Content-Disposition: attachment; filename=audio.wav");
        header("Content-length: $size");
        header("Content-type: audio/wav");
        echo($content);

        mysql_close();
    }else{
        die("No file ID given...");
    }
?>
