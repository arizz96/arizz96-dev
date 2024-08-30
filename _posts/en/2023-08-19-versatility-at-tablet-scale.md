---
layout: post
title: "Versatility at tablet scale"
date: 2023-08-19
excerpt: For developers like me, who always wants to be able to connect to the virtual world they're working on, a device capable of this is almost essential.
---

For developers like me, who always wants to be able to connect to the virtual world they're working on, a device capable of this is almost essential.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/1.png"/>
  </div>
  <p class="desc">"technological swiss knife, synthwave"</p>
</div>

When I've projects that need high monitoring and near-real-time intervention actions, I used to bring with me a computer when going on vacation or leaving home for the weekend, just in case something is urgently needed and no one else is available to do that.

At first, I used a 2011 MacBook Air 13", bought from a colleague at a low price, and it did its job until RAM decided to unsolder itself, falling in the 3 beeps startup issue 😱
I tried fixing it with flux and thermal gun, but it didn't last more than a few minutes, unfortunately...
> ...but every cloud has a silver lining, so I started my research for a replacement!

I also realized that the old MBA was not only blocked to macOS High Sierra (support ended in 2020), but it was also quite heavy (1.35kg) and the battery life was poor.

### Many many options

To accomplish this task, the requirements are not so many: a portable computer capable of running an IDE and a bash, preferably in a Unix-like system.

There are many netbooks, convertibles, 2–1s, and many similar devices, but at a certain point, I decided that my new friend needed to be powered by an ARM processor.

*Why?!*
Well, the main reason is pure paranoia, but seeing the performance, battery life, and thermal efficiency of Apple Silicon Macs, I think ARM SoC deserves **first** place in the future of general-purpose computers.

This drastically narrows the field, leaving out a few Windows on ARM tablets, the newest MacBooks, and Android tablets.

I skipped Windows on ARM because it's still in Preview and the emulation of x86 is not that performant (meaning that most Windows applications might not work properly).
I also skipped on the newest MacBooks because of the price, I can't spend nearly 1000€ for a device I use not so often.

The big Android tablets family remains, but it didn't convince me at all, I usually hate Android customizations, but searching for a vanilla Android tablet, I found an interesting thing: a **ChromeOS tablet** 🤩

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/2.png"/>
  </div>
  <p class="desc">"a green field with brand new colored laptops and tablets, digital art"</p>
</div>

### ChromeOS

The [ChromeOS](https://it.wikipedia.org/wiki/Chrome_OS) operating system is maintained by Google and is preinstalled on all Chromebooks. It's a very lightweight system based on the Chromium project, capable of running most web applications (*so it's as lightweight as Chrome can be...*).

The things I fell in love with are essentially 2: the ability to run a **Linux development environment** and the ability to run **Android apps**. That means this is a tablet with a very light interface, able to act as a Linux distribution and as an Android tablet 🤯

There's also a Flex version of ChromeOS, available for installation in many many devices, but there are [differences](https://support.google.com/chromeosflex/answer/11542901?hl=IT) between the two, mainly for Linux and Android subsystems, so I skipped it.

## Lenovo Ideapad Duet Chromebook

I finally found this tablet and decided to go with it.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/3.jpg"/>
  </div>
  <p class="desc">image source: Lenovo</p>
</div>

### Specs

* Display 10.1'' FullHD, 1920x1200, IPS, 400nits

* CPU: MediaTek P60T (8C, 4x A73 @2.0GHz + 4x A53 @2.0GHz)

* GPU ARM Mali-G72 MP3

* Storage 128GB

* RAM 4GB

* Lenovo keyboard

### Price

I paid about 260€ for this, that in my opinion is adequate for the specs it has.

### Versatility

The versatility of this device is amazing and limited only by the CPU and RAM performance but since it's a low-end product, that's a fair compromise.

As mentioned before, running ChromeOS means that all PWAs are available to run on it, so along with all Google Workspace suite, WhatsApp, Telegram, YouTube, and many others, are a thing.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/4.png"/>
  </div>
  <p class="desc">Application bar with PWAs</p>
</div>

A Debian 11 distribution is available from developer tools, and along with it all Linux software, including IDE.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/5.png"/>
  </div>
  <p class="desc">htop snapshot running on Debian 11</p>
</div>

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/6.png"/>
  </div>
  <p class="desc">Visual Studio Code running on Debian 11</p>
</div>

For all the other needs, an Android 11 system is there to run all available Android apps and games, both in smartphone and tablet format (or resizable window in the latest update).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-08-19-versatility-at-tablet-scale/7.png"/>
  </div>
  <p class="desc">Play Store running on Android 11</p>
</div>

## Conclusion

It took a lot of time to find an adequate device, but in the end, I'm completely satisfied with this one. It allows me to do basic office work, monitor and act on software if needed, and also have fun in my spare time.

Performance is not the top of the class, but that's reasonable for the price and the target of this device. You can hit the RAM limit when doing many things, but massive multitasking on high-load applications isn't the purpose of this little friend.

Battery life is quite good, you can easily reach the end of the day when doing light productivity, while on video calls or playing games, up to 4 hours of usage are available.

### Bonus

It surprised me on game performance: basic games works without issue, I tried Asphalt 9 and it runs smoothly, but I also saw a playable emulation of PS2 famous games! 🚀
