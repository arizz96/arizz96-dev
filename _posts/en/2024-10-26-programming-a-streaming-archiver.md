---
layout: post
title: "Programming a streaming archiver"
date: 2024-10-26
categories:
- projects
excerpt: A portable, hacky and versatile video streaming scheduler and downloader
---

[Checkout the project code on GitHub](https://github.com/arizz96/streaming-archiver)

---

I remember back in the days when I was a kid and my favourite TV program aired at the same time I was leaving my house and I was very angry about that, until I started recording them to VCR and watch them whenever I wanted to.

In this modern world, on-demand video contents took over this old stuff, and everything is ready to be served whenever we want it...   
...where the on-demand feature applies!

There are many broadcasters in Italy that provides free-to-play on-demand replays, like RaiPlay, Discovery+, and so on, but not all of them. It can happen that you want a replay of something recently aired, but it's not available anywhere for free.

I'm a software developer, so I quickly set up a proof-of-concept of a system capable of recording live streams, just to play with it.

> ### Disclaimer
> This project is intended solely for educational purposes and personal experimentation. Users are responsible for ensuring that any broadcast streams used comply with the broadcaster's terms and conditions regarding recording, archiving, and personal use. Unauthorized recording or redistribution of content may violate copyright laws and broadcaster policies. Please consult the terms of service of each broadcaster before using this system to record or archive any live streams.

## Project start and its development

1. I initially started simple. I found an IPTV link that provided a video stream link of the target TV channel, I set up an FFMPEG downloader script and launched it manually when needed.
> That was basic, but it obviously required me to be at home, so it didn't scale.

2. Next up, I set up my **NanoPi** board (it's a Neo Plus2, a little friend) with `ffmpeg` installed, a `Tailscale VPN` connection to be able to connect to it from anywhere, and via SSH login, manually launching the downloader script.
That worked too—maximum result with minimal effort.
The video was then accessed via SMB (setting up a samba server with basic credentials), downloaded on a local device like a smartphone or a tablet, and played.

3. Always having to access the script manually was annoying, so I added a cron job, scheduled with `crontab`. The schedule can be set up anytime before the actual live stream, and the system automatically takes care of it.

4. The following step aimed to reduce the complexity of accessing the video: creating a PHP webpage that exposes downloaded videos playable directly in the browser. This allowed easy video access remotely through the VPN as well.

5. One step further: automatically programming `crontab` via EPG. This required the most effort but yielded the smallest benefit, eliminating the need for manual cront programming. At the same time, it was the most satisfying. It requires the broadcaster to publish EPG somewhere on the internet, in any format. In some tests I did, I found a JSON API for it, but in the worst case, an HTML page can be scraped.

6. Last but not least, I added Telegram notifications for when the download schedule changes, and when the script starts and ends. In this way, I no longer need to check the system status; I receive notifications for it.

## Issues found and caveats applied

- The first issue encountered was self-created: using the **NanoPi** board with the goal of keeping it portable and lightweight. To do this, I used only bash scripts and common apt packages (`ffmpeg`, `cron`, `apache2`, `php81`). In the end, I packaged everything in a Docker image to maximize portability.

- Another area I spent time on was the `ffmpeg` configuration, which I studied and optimized for this board. I kept downloads in 30-minute segments, allowing me to start watching a little after the recording starts, not just at the end of the recording.d.

- The recording schedule includes a 10-minute buffer before the EPG schedule and a duration of 150% of the program time. This allows the recording to capture an early program start and to account for possible late endings.

- Storage on the NanoPi can be problematic; for this task, I installed the latest available Ubuntu version on a 32GB card, installed Docker, and mounted the SD card at the `/sdcard` path.

## Final result

The final result is a compact, ~140MB Docker image containing all the features described above. The HTML video page is very basic (video previews are disabled intentionally to prevent spoilers). It also shows the crontab configuration, allowing it to be reviewed at a glance upon opening the page.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2024-10-26-programming-a-streaming-archiver/1.png"/>
  </div>
  <p class="desc">HTML page</p>
</div>

The Telegram messages are very basic: not much styling, only the content needed.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2024-10-26-programming-a-streaming-archiver/2.png"/>
  </div>
  <p class="desc">Telegram Bot conversation</p>
</div>
