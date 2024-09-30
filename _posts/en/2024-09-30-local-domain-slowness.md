---
layout: post
title: "Local domain slowness"
date: 2024-09-30
categories:
- tips
excerpt: Configuring a .local domain in your machine can slow down your process
---

Configuring a `.local` domain in your machine can slow down your process, and I randomly discovered it while developing a website feature with a Rails server and a NGINX reverse proxy.

*It sounded very strange that web requests to my local machine were taking so much time, and it was very random!*

## Test case

For this simple explanation, I started a Ruby on Rails server with an empty application (but anything that serves HTTP can be used as well) on my local machine (MacBook Pro M3) on port 3000 and added a entry on `/etc/hosts`:
```
127.0.0.1       local-server.local
```

I initially thought it was due to some server cache expiration or some rebuild process it was doing under the hood, but then I noticed it was happening even if the code remained untouched, which was really weird.

Digging into developer tools, in the network tab, there was a high total time, but the **DNS Lookup** caught my attention:

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2024-09-30-local-domain-slowness/1.png"/>
    <img src="/assets/images/2024-09-30-local-domain-slowness/2.png"/>
  </div>
  <p class="desc">First request first, a immediate refresh follows</p>
</div>

As you can see in the images above, the first request took 5s to lookup the DNS for `local-server.local`, while the second responded instantly.   
This happens every few minutes.

## Trying a different domain

After excluding multiple factors like app cache, build and other stuff, I tried adding another entry on `/etc/hosts`:
```
127.0.0.1       local-server.localhost
```

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2024-09-30-local-domain-slowness/3.png"/>
    <img src="/assets/images/2024-09-30-local-domain-slowness/4.png"/>
  </div>
  <p class="desc">First request first, a immediate refresh follows</p>
</div>

As you can see, switching to `local-server.localhost` solved the slowdown!

## Reason

The `.local` domain is reserved for mDNS as part of the Zeroconf protocol (also known as Bonjour on Apple devices or Avahi on Linux).   
mDNS is used for hostname resolution on local networks without the need for a central DNS server. When you use `.local`, the system tries to resolve the domain via mDNS before falling back to other name resolution methods.

This can cause a delay because the system sends out multicast DNS queries over the network, and waits for responses from other devices. If the `.local` name doesn’t correspond to a local mDNS entry, this lookup can take a few seconds to time out before the system falls back to regular DNS or hostfile resolution.

More on that on [this blog post](https://community.veeam.com/blogs-and-podcasts-57/why-using-local-as-your-domain-name-extension-is-a-bad-idea-4828).

***Hoping you found this useful, see you in the next one!***
