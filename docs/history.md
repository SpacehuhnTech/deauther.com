---
title: 'History'
description: 'How this project came to be. The history of the ESP8266 Deauther.'
sidebar_position: 100
---

![First ESP8266 Deauther](/img/history/firstdeauther.jpg)

It all started in October 2016. I was tinkering with Arduino and learned that some of them could be programmed to act as a keyboard. So I started making a BadUSB with an Arduino Micro (like the USB Rubber Ducky). But I was also looking at other microcontrollers and what I can do with them. Hacking with Arduinos wasn't really a thing yet.  

I came across the ESP8266 and NodeMCU ([what's the difference](https://blog.spacehuhn.com/nodemcu-vs-esp8266)), a very affordable, WiFi-capable, and Arduino-compatible microcontroller. So I bought my first NodeMCU and started experimenting. Because I was learning about [ARP spoofing](https://en.wikipedia.org/wiki/ARP_spoofing) at the time, I thought I could give that a try on the ESP8266.  

It turned out that wasn't possible. Not with the provided libraries, at least. 
But you could send raw WiFi frames. And so I remembered what I learned about WiFi hacking and that there's a thing called [deauthing](https://en.wikipedia.org/wiki/Wi-Fi_deauthentication_attack). 

But getting the ESP8266 to send a deauth frame was challenging too. It took me a lot of trial and error, searching in forums, and collecting little pieces of information until I finally figured out how to get around the packet injection limitations. 

And then I had a deauther! Well, sort of. I still had to design a user interface. After experimenting with some small affordable OLED displays, I decided to focus on making a web interface instead. Because this allowed the firmware to run on any ESP8266, making it a lot more accessible. You only need a power source, and most development boards have a USB port. 

I finally released my project on GitHub on January 7, 2017. And... nobody cared. Well, nobody knew about it. But before I moved on to new projects, I wanted to message Seytonic via Youtube. I knew his channel from when I started making BadUSBs. Coincidentally he began making videos about Hacking and Arduino at about the same time I started doing that. 
And he actually made a video about it! It got a lot of views and inspired more creators to make videos about the project. But unfortunately, this included some very uninformed creators who saw the clickbait potential in my work and told millions of viewers how super dangerous and illegal this is. 🙄

Because of that, everyone knew it as the WiFi jammer. And I got really annoyed by that!

I made the Deauther so more people can learn about the vulnerabilities of WiFi, test for them, and teach practically. 
I believe it's important to highlight hacking as something good and make it easier for beginners to understand how technology works and where its limits are. 
Hacking tools and cyber criminals exist, whether we make these tools accessible or not. But by making information about hacking more approachable, we get more people who can help solve these security challenges. 

:::tip
If you want to learn about the hacker mindset, check out my [blog post](https://blog.spacehuhn.com/ethical-hacking).
:::

But simply calling it a WiFi jammer and not explaining what it is and how it works completely undermines this goal. 
Deauthing only affects the target you selected and only if it's vulnerable to the attack. 
With a jammer, it's different. It creates a bunch of noise affecting every wireless communication on a specific frequency. So you have no control over the communications you disrupt, and you could accidentally block vital emergency infrastructure without knowing.

So having my educational proof-of-concept tool mixed up with something illegal frustrated me a lot. It wasn't so much about the clickbait titles but that they didn't care to explain how it worked—separating my work from its educational value. Fortunately, time was in my favor. And today, this isn't a real problem anymore, and the WiFi jammer hype is over. 

But 2017 was wild. I went to a hacker conference for the first time and met so many incredible people because of this project. It was also the year I finished high school and started studying computer science. 
Since then, I've updated the project many times, collaborated with DSTIKE and Maltronics to bring you custom Deauther boards, and eventually started my own company. This project definitely shaped my life in a significant way.

But I also moved on to new projects now (see [spacehuhn.com](https://spacehuhn.com)).  
Although I would still like to improve many aspects of this tool, the memory and processing limits of the ESP8266 are just too frustrating for what I have in mind. And at the end of the day, it already does its job. 
It was never meant to be a professional pentest tool but more of a proof-of-concept / DIY hacking tool to learn and test on. And it makes me so glad that this is what I have achieved at the end of the day. 

The number of cool hacking projects I helped inspire, make my day!
Thank you all :)