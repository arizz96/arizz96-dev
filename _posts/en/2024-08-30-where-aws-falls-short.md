---
layout: post
title: "Where AWS falls short"
date: 2024-08-30
excerpt: I got in touch with AWS only a few years ago but it was a short time before I understood it can be bazillion times better, especially for the price.
published: false
---

### *This article will be constantly updated with new stuff whenever I encounter it*
---

I got in touch with AWS only a few years ago but it was a short time before I understood it can be bazillion times better, especially for the price.

From this article it may sounds that I wouldn't recommend AWS services at all and that they're all bad. That's not the point. I think they're providing services for basically any taks you need, but I'm fully convincted they can be a lot better, improving the user experience they're offering, in terms of:
- hidden costs and limitations
- high learning curve
- web UI

I used AWS (and I'm still using it) for moer than one company I worked for, because it provides a large set of services and guarantee a certain level of professionality needed by the market you're in, as well as defined SLAs.

Unfortunately I've no experience with other public cloud provider like Google Cloud or Microsoft Azure to compare them, but the comparison with a fully managed infrastructure barely stands.

## Before AWS

When I was in UALA we used Hetzner bare metal servers and everything was running there orchestrated by Rancher and K8S.

> I'm also convincted that by running something that is cheaper than the most famous cloud provider make you prone to some over-resource-usage, that's obvious, but remember that cost-optimization is not time free.

## Considerations

1. I may have experienced a sort of hate against AWS also due to the situation I was when I firstly had to work with it, so I may be very biased by it but there are also *lucid* motivations.
2. I'm not AWS trained and certified, I think that needing a graduation to optimally use a service makes that service not friendly and developer-oriented at all. For the majority of tasks, the "getting started" guide of many services is very straightforward and easy to understand, without hidden limits.
3. I'm a DIY man very keen to putting so many things in someone else's hands, that's definitively against AWS motto.
4. All the motivations reported here can obviously be avoided with a consultant, but event that is not for free, and see `2.` and `3.`.

## My motivations

### Everything is billed

Not much to say on this, just for you to know that even checking your bill is billed.

### The NAT gateway goldmine

### Storage IOPS limitations

When you need to persists data in the cloud and access it quickly and directly, the AWS' solution is EBS (Elastic Block Storage). Those are usually treated as volumes and mounted on EC2 istances, as K8S volumes or as RDS storage.
There are two classes of [storate](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html): provisioned IOPS storage and general purpose storage, but knowing how many IOPS your system is using and will use in the future is not an easy task, requires a lot of knowledge and attention (think about a data migration, that will massively affects IOPS).

In my case, it was a big PostgreSQL instance running on K8S with an EBS volume mounted; the system performed massive historical data read, that won't obviously fit into memory and need to be read from the disk. The IOPS limit was reached and the system was slowed down, but no alarm was triggered. After investigating, the IOPS limit was the bottleneck and the solution has been a conversion of the volume to a provisioned IOPS class.

That's not the "wanted" AWS infrastructure, because they built RDS and Aurora for database services, I'm aware of this, but it's important to know that also RDS service has it's own [storage limitations](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html). In my case, also the default 12,000 baseline IOPS of `gp3` class (because the database size was > 400GiB) wasn't enough.

> That's and edge case, not many users need that high I/O throughput, but still...

### Quotas increase time window

That's related to the [storage IOPS limitations](#storage-iops-limitations) point, because I discovered this while fighting against IOPS limits.

You may think that, if you reach the quota limit on something, you can just go on the setting panel and increase it. Well, sort of.

Sometimes you can, sometimes there's a higher limit you can't go over without asking AWS support (which is not immediate of course).

For example, for [EBS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-resource-quotas.html), the "IOPS for Provisioned IOPS SSD (io2) volumes" is 100,000 (each supported Region).

If that's not enough, some limit change is limited by a time window. Once again, I experienced it when increasing the `gp3` storage IOPS limit, that can be done only [once every **6 hours**](https://docs.aws.amazon.com/ebs/latest/userguide/requesting-ebs-volume-modifications.html#modify-ebs-volume).

### Apparently simple operations are so slow

- Increasing the time period of your cost explorer can take up to 48 hours
![](/assets/images/2024-08-30-where-aws-falls-short/1.png)
- Increasing IOPS (this topic again, sorry) need storage "optimization" that can also be hours
- Creating a small ElastiCache memcached instance (`cache.t3.small`) is about 10 minutes to create and same time to destroy

### Support fee

Did you know that a decent support in the great world of AWS isn't included by default and you need to sign up for an additional [support plan](https://aws.amazon.com/premiumsupport/pricing/). The lower `Developer` plan is the one *Recommended if you are experimenting or testing in AWS* and response time is:
> General guidance: < 24 hours**   
> System impaired: < 12 hours**   
> ...   
> **Business hours are generally defined as 8:00 AM to 6:00 PM in the customer country as set in My Account console, excluding holidays and weekends. These times may vary in countries with multiple time zones.

That's what you get with 3% of monthly AWS charges with minimum spend of $29.00 (on support plan).

### RDS cluster upgrade pre-check timings

Want to upgrade your RDS cluster to an higher engine version? AWS provides a handful tool to do it through an automatic process. The deal here is that you're not in control of the update itself, you just launch or schedule it. While it can be optimal for small applications or low-load systems, when every minute of downtime really counts, this can be a problem.

For example, to update a Aurora MySQL cluster from MySQL 5.7 to MySQL 8, there is a set of "pre-checks" that needs to be done before the real migration. You just start the whole process, then it runes all those checks and update the system version at the end. In my experience, this time window varied from few minutes to **six hours**, and that's definitively not ideal.

### Burstable EC2 instance types

That was strange to me. In a system I worked with, we implemented [Karpenter](https://karpenter.sh/) to optimize instances used by our EKS cluster, and it pretty much do its amazing job. It optimize resources allocated by K8S requests, to minimize waste of CPU and memory.

There were some unstable response time in the web application running on this cluster, and the reason was unclear. After some investigation it turned out that the issue was be limited to a set of pods which where using some specific instance types only.

At the top of cheaper EC2 instance types there is the `t` class, which include some [burstable general-purpose instance type](https://aws.amazon.com/ec2/instance-types/#Burstable_Performance_Instances). Those instances gains CPU credits every hour and use those credits to burst the CPU performance.

While it can be optimal for low load systems, it creates imprevidibility on them, and can cause issues in terms of performance.

### The VPC cage

While the cost impact of VPC is discussed in [another point](#the-nat-gateway-goldmine), the VPC you decide to run your services on is a very important decision that you might not know at your project beginning. In fact, once the VPC is set, it can't be changed on the majority of services (RDS, ElastiCache, EC2, ...).

That's not an issue for stateless services like web servers that can be replicated and traffic easily (but not for free) redirected to another VPC, it can become a major problem for services like a database.

When I said that VPC can't be changed, that's for real, it's not possible, not even with a restart downtime.

The service must be re-created in the other VPC. Think about moving a MySQL database or a Redis node, not having an easy way to move them can be huge.

### Lost logs

Ever tried to launch an ECS task with a simple script in it and for some reason it died? In that case you might want to know the reason of the unwanted stop, isn't it?

Well, in ECS but also on other AWS services, when an entity is removed, there's no way to recover vital informations from it. I'm not saying I want to restore files in S3 I manually deleted after being asked for the "delete" confirmation, but having the list of events happened to an ECS task might be very useful.

I figure out two ways to workaround this problem: the first one requires you to constantly watch the service and being there when it dies, the second one is to setup some sort of pipeline that can forward the event logs to CloudWatch. Up to you to decide what's less time-expensive.

### RDS proxy settings

Do you need to keep your database private and safe, but exposing it for a single user with specific limitations? You might want to create a proxy that allows it.

In the RDS page you find a "RDS Proxy" part that allows you to create a proxy. *But* that proxy must reflects same security settings of the database linked to, that includes VPC, authentication mode, public/private state and so on.

### Forced system updates

> That's a minor one and mainly involves little projects.

Services' version expire, and they do it quite often on AWS. They publish a supported versions calendar to let users check it and prepare updates in advance. This forces you to keep up with new versions of software, not only for new features but also for security reasons, and that can be a very good things for companies.

If you don't update the service before the due date, AWS do it for you, in place. That obviously bypass all the checks you might need to do on your system.

While I consider that a good point for companies, it might kill some unmaintained little project running on legacy software. It happens that some software is unmaintained just because it's ok as it is and the community beside it is not investing in it anymore, but that's not a valid reason to brake it.

## Bonus section

I wasn't fully convincted of the original title for this article, so I asked ChatGPT for help:

> I want to write an article where I put all my consideration about how bad AWS is and the fact that it can be a lot better. atm, it's called "why aws su**s" but that's not politically correct. can you help me? it must be short and concise

I thought I was asking for the title, but it quickly replied with:

>Certainly! Here’s a more polished and politically correct title, along with a concise article outline:
>
> Title: "Areas for Improvement in AWS: Opportunities for Enhancement"
>
> **Introduction:**
>
> Amazon Web Services (AWS) is undeniably one of the leading cloud platforms in the world, offering a broad array of services. However, despite its strengths, there are several areas where AWS could significantly improve to better serve its customers. This article highlights key concerns and potential enhancements that could make AWS more user-friendly and efficient.
>
> **1. Complexity of Services:**
>
> While AWS offers a wide range of services, the sheer volume and complexity can be overwhelming for users, especially those new to cloud computing. The learning curve is steep, and the documentation, though extensive, can be difficult to navigate. Simplifying the interface and providing clearer, more targeted guidance would help users better understand and utilize AWS offerings.
>
> **2. Cost Management:**
>
> AWS’s pricing structure is complex, often leading to unexpected costs. Users frequently struggle with estimating and controlling expenses. AWS could improve by offering more intuitive cost management tools, clearer billing information, and better cost predictability. Simplifying the pricing model and providing real-time cost tracking would greatly benefit customers.
>
> **3. User Experience (UX) Issues:**
>
> The AWS Management Console, while powerful, is often criticized for its outdated and clunky user interface. Navigation can be confusing, and tasks that should be simple often require multiple steps. A more modern, streamlined, and user-friendly interface would enhance the overall user experience.
>
> **4. Service Reliability and Support:**
>
> AWS generally provides reliable services, but there have been instances of outages that have affected large portions of the internet. Furthermore, customer support, particularly for lower-tier users, can be slow and unhelpful. AWS could improve by offering more robust redundancy measures and better support options, ensuring that all users, regardless of their service tier, have access to timely and effective assistance.
>
> **5. Integration Challenges:**
>
> Integrating AWS services with third-party tools or even other AWS services can sometimes be challenging. There’s often a lack of seamless integration, leading to frustration and inefficiency. AWS should focus on enhancing the interoperability of its services and making it easier to integrate with external tools.
>
> **Conclusion:**
>
> AWS is a powerful platform with a lot to offer, but there are significant areas where it could improve. By addressing the complexity, cost management, user experience, reliability, and integration challenges, AWS has the potential to become even more user-friendly and efficient, making it an even more valuable tool for businesses of all sizes.
>
> This version is more diplomatic, focusing on constructive criticism rather than simply stating that "AWS su**s." It offers specific suggestions for improvement, making the feedback more actionable and balanced.
