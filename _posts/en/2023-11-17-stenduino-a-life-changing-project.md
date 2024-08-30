---
layout: post
title: "Stenduino: a life-changing project"
date: 2023-11-17
language: en
ref: 2023-11-17-stenduino-a-life-changing-project
categories:
- projects
- diy
excerpt: That's the story of how Alessandro Rizzo, Mattia Fioraso, Nicola Dal Maso, and Stefan Mirkovic brought to life an IoT project that boosted their working lives.
---

That's the story of how Alessandro Rizzo, Mattia Fioraso, Nicola Dal Maso, and Stefan Mirkovic brought to life an IoT project that boosted their working lives.

## Where it all started

It all began during our last year at high school (2015) when one of our teachers shared with us a hackathon called 100100Challenge organized by [Confartigianato Vicenza](https://www.confartigianatovicenza.it/). We have been classmates since the first year and are very passionate about technology and coding.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/1.png"/>
  </div>
</div>

### The hackathon

In that period of time, the Internet of Things topic was at the top level for us and for the society around us, that high that a local group now named [DIH Vicenza](https://digitalinnovationhubvicenza.it/) proposed a hackathon where IoT was the focus.

Some of our class students had the opportunity to participate in a lesson where the Tinkerkit Basic Kit was explained, along with the powerful [Arduino Yún](https://docs.arduino.cc/retired/boards/arduino-yun) board.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/2.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

> ### As mentioned earlier, we were very passionate and we were spending lot of time on tech-related activities. As a result, we developed different projects with Arduino boards, websites full of UI elements, server-side applications running in the cloud, and many other projects, before all of this!

The hackathon's theme was unknown until the start, but we started thinking and developing a bunch of ideas related to the IoT world, hoping at least one of them would fit the requirements.

A total of 13 groups took place in this challenge, bringing 70 people to the beautiful [Museo Civico of Bassano del Grappa](http://www.museibassano.it/Museo-Civico).

## Stenduino

The idea came when my mum yelled at me when all my clothes got wet because I didn't save them from the rain while she was at work. I was probably developing some nerdy idea, and having a lot of fun in it if I didn't realize it was raining, but she obviously didn't care about that.
> ### *Focusing on a real-life problem was the key: no need to think about strange and complex IoT systems!*

### Project details
> **Disclaimer**: we're writing this article in 2023 knowing that a lot of time has passed and some technology mentioned here is no more a thing.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/3.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

We based our project on a vertical dry rack, where dimensions are about 200x80x80cm, and clothes are placed on multiple layers of rack "arms".

The primary function of the system is to put a cover on your clothes when rain comes. A very simple task that solves that real-life problem we experienced and made use of.

Luckily, the basic idea fitted the hackathon requirements, so we heavily developed it during the 24 hours available.

A stepper motor is responsible for covering the clothes with a curtain: it is originally placed folded on one side and a rigid arm connects it to the motor's gear and lets it unfold circularly around the structure. This motor is actioned automatically using a weather service provider that the system constantly queries.

We then added smart sensors, such as humidity and temperature sensors that improve the accuracy of weather data, as well as conductive lines on each rack arm that measure the dryness of clothes using the water present in them as electrical resistance.

At the core of it, the Arduino Yún uses both its microcontroller part to interact with the motor and all the sensors, and the Linux distribution to handle the communication from and to the internet.

All of this relies on a small lithium battery charged by a little solar panel placed on the top of the structure; not only a smart drying rack but also a 100% green device!

The physical structure of the project has aluminum parts, some PVC pipes, and 3D-printed parts thanks to the in-place 3D-printing stand during the hackathon.

### Choosing the name

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/4.png"/>
  </div>
</div>

The name follows a nice convention of the Arduino community, where project names play with the board name that powers it.

In Italian, "drying rack" translated to "stendino", so merging the two words together made the Stenduino name come to light.

*For this particular fact, we want to thank our classmate Giulio, an expert in this kind of humorous creativity.*

## Developing the software for it

Stenduino's software is composed of multiple parts:
> **Disclaimer**: we intentionally left it as it was on purpose, and again, we acknolwdge that a considerable amount of time has passed. 
We can assure you that after this project we no longer used Italian in development.

### On board scripts

Arduino Yún offers both a microcontroller and a Linux system, and both of them are used here: the microcontroller program acts as an interface between the Linux system, the motor, and the sensors; they communicate with each other through a serial console tunnel.

On the other side, the Linux system executes a Node.js application that allows communication with the internet with push notifications (basically a socket channel), to send sensors' data to the server and to receive instructions when something must be performed.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/5.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/6.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/7.png"/>
  </div>
  <p class="desc">Arduino script and Node scripts respectively</p>
</div>

### Backend application

As an IoT device, it needs some cloud system to work fully, offering remote control, real-time notifications, and historical data storage. To do that we used PHP, simply because it's the programming language that we were using at school to build server applications, and we chose [Altervista](https://it.altervista.org/) as the cloud provider as it offers a free plan that suited our needs (web hosting and a MySQL database).

A lot of stuff was very primitive for us, variable names were in Italian, as well as SQL tables (as you can see in the ER schema below).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/8.png"/>
  </div>
  <p class="desc">ER schema of the database</p>
</div>

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/9.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/10.png"/>
  </div>
  <p class="desc">PHP backend scripts</p>
</div>

### Web application and Android application

In the first project phase, only the Android application was developed, but in the following iteration, we created a web app using the same style and primitives, using libraries at the edge of innovation for that period, such as [Polymer](https://polymer-library.polymer-project.org/) and [Material Design](https://m1.material.io/).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/11.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/12.png"/>
  </div>
  <p class="desc">Android application login page and related code</p>
</div>

## We won the hackathon!

After 24 hours of intense development and prototyping of our idea, the final step of the challenge took place: winner announcement.
> ### I can say that we were expecting some acknowledgment of the high effort put into our project, but we surely didn't expect to be the winners!

We won it! First place went to this group of four students who brought a smart solution for a real-life problem!

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/13.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

### Prize

As per the hackathon prize, we won a **BlueTek Strato 3D**, a 3D printer from a famous Italian manufacturer, that we used to continue the project development. That 3D printer is now used by mechatronic courses of study proposed by the high school we attended.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/14.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

But that was only the beginning, the real prize is the energy this hackathon gave us and the commitment we put into the transformation of this energy into new opportunities!

<iframe width="560" height="315" src="https://www.youtube.com/embed/mYIh4SSmVZM?si=g1zJ0S_bJNy1Hisq" title="100100 Challenge - Internet of Things Hackathon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Maker Faire

After winning the hackathon, we were very enthusiastic and we wanted to move forward with our project, so we decided to participate in the [2015 edition of the Maker Faire](https://makerfairerome.eu/it/espositori/?edition=2015&exhibit=235), a well-known conference whose slogan is: "*A celebration of invention, creativity, curiosity, and hands-on learning showcasing the very best of the global **Maker** Movement since 2006.*".

We got a sponsorship from the hackathon organization for participating, and we really want to thank them again for helping us in that fantastic journey.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/15.jpg"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/16.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

At that fair we got immersed into an amazing world of innovation and innovators, it's really mindblowing, and for people like us who were eager to see and shape the future (somehow), there's nothing better than it.

We made new friends and we also got some interviews: we have also been interviewed by [Tom's Hardware](https://www.tomshw.it/), one of the best online publications about technology, and we are very proud of this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UoFHcV63oog?si=q-kxQIpTVHvHfMFH" title="Stenduino, lo smart-stendino tutto italiano | Maker Faire 2015" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## And then what?

After the Maker Faire, we paused the project development because we all started working in different companies, but we also continued our study journeys.

The project opened our eyes to a huge world of opportunities and radically changed how we see things, so instead of considering it ended, let's say that it started our careers instead!

We want to thank the [DIH Vicenza](https://digitalinnovationhubvicenza.it/) group for creating and orchestrating the hackathon. Additionally, a special thanks go to our [school](https://www.iisvaldagno.it/) and, in particular, to Riccardo Crosato, for the support and for initially proposing this fantastic opportunity.

## Mentions

We had a large number of mentions after winning the challenge, but also for the participation at the Maker Faire:

Many articles have been published on the school website about the [hackathon](https://www.iisvaldagno.it/hackathon-100100-challenge-il-video-riassunto/), the [winning](https://www.iisvaldagno.it/hackathon-100100-challenge-gli-studenti-del-marzotto-stravincono/), and the [fair](https://www.iisvaldagno.it/stenduino-al-maker-faire/).

We met Massimo Banzi (Arduino founder) at the Maker Faire, but just after the hackathon, he mentioned our project at [IoE Forum 2015](https://www.youtube.com/watch?v=ZA1vt7zFSog).

Many local and national newspapers shared the winning announcement and our story behind it:

* [corriere.it](https://corriereinnovazione.corriere.it/eventi/2015/24-gennaio-2015/stendibiancheria-avvisa-se-panni-sono-asciutti-sta-piovere--230887871376.shtml)

* [ilgiornaledivicenza.it](https://www.ilgiornaledivicenza.it/territorio-vicentino/bassano/lo-stendino-intelligentevince-ad-quot-hackathon-quot-1.1849200)

* [ilgazzettino.it for Pordenone](https://www.ilgazzettino.it/pay/pordenone_pay/171_stenduino_187_legge_da_solo_le_previsioni_tempo_intuisce_la-1417990.html)

* [ilgazzettino.it](https://www.ilgazzettino.it/home/hackathon_100100_challenge_itisvem-842141.html)

* [ilsole24ore.com](https://barbaraganz.blog.ilsole24ore.com/2015/01/26/in-24-ore-quattro-studenti-hanno-inventato-stenduino-lo-stendino-che-consulta-il-meteo-e-ritira-i-panni-asciutti-centocento/)

* [confartigianatovicenza.it](https://www.confartigianatovicenza.it/hackathon-100100-challenge-di-confartigianato-premiato-lo-stendibiancheria-stenduino-interattivo-e-connesso-al-web/)

* [ninjamarketing.it](https://www.google.com/url?q=https://www.ninjamarketing.it/2015/10/19/maker-faire-2015-cosa-aspettarci-dal-domani/%23:~:text%3Dquelle%2520pi%25C3%25B9%2520interessanti-,stenduino,-%252C%2520lo%2520stendibiancheria%2520intelligente&sa=D&source=docs&ust=1699954354709215&usg=AOvVaw0O9laTO59KAjQ6eN77zOY8)

* [ImpresaDiretta](https://youtu.be/YPtN26MHwjA?t=296)

* [TV2000](https://www.youtube.com/watch?v=aVTZUPDa0bI&t=6540s)

Just after the award ceremonies of the hackathon, we got an [interview](https://soundcloud.com/matteo-pisanu/radio-due-i-provinciali-puntata-del-27-gennaio) for a famous Italian radio podcast.
