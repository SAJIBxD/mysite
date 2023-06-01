---
title: "ffmpeg commads to make your life easy"
date: 2023-05-27T19:46:12+06:00
tags: [shell, tools]
---

Convert all mkv to mp4
------------------------
```shell
for i in *.mkv; do
    ffmpeg -i "$i" -codec copy "${i%.*}.mp4"
    done
```

Convert webm to mp4
-----------------------
```shell
for i in *.webm; do
    ffmpeg -fflags +genpts -i "$i" - r 24 "${i%.*}.mp4"
        done

ffmpeg -fflags +genpts -i 1.webm -r 24 1.mp4
```
   
Convert audio m4a mp3
-------------------------
```shell
for f in *.m4a; do ffmpeg -i "$f" -codec:v copy -codec:a libmp3lame -q:a 2 "${f%.m4a}.mp3"; done
```

Merge multiple file under a directory into one:
----------------------------------------------
```shell
for f in *.mp4; do echo "file '$f'" >> videos.txt; done

ffmpeg -f concat -i videos.txt -c copy output.mp4
```

