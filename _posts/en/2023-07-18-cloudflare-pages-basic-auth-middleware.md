---
layout: post
title: "Cloudflare pages Basic Auth middleware"
date: 2024-07-20
categories:
- tips
excerpt: A plug and play Cloudflare pages Basic Auth middleware
---

Inspired by Cloudflare's official [Basic Auth guide for Workers](https://developers.cloudflare.com/workers/examples/basic-auth/) and the [middleware guide for Pages](https://developers.cloudflare.com/pages/functions/middleware/), I created this `_middleware.js` file. This file works when placed in the `functions/` folder of your Cloudflare Pages repository.

It leverages the `BASIC_USER` (defaulting to "admin") and `BASIC_PASS` (defaulting to "password") environment variables.

If other middlewares need to be used alongside this, ensure that `export const onRequest = [authentication];` is properly configured.

<script src="https://gist.github.com/arizz96/9478d963e5ae20346fba8e591a0fcbd2.js"></script>
