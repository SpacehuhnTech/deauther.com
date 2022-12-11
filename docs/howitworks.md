---
title: 'How it works'
description: 'How the ESP8266 Deauther disrupts WiFi connections and why it is not the same as a jammer.'
sidebar_position: 20
---

![](/img/dstike_deauther_oled.jpg)

A [deauthentication attack](https://en.wikipedia.org/wiki/Wi-Fi_deauthentication_attack) works by sending packets that tell the receiver they are disconnected. Deauth frames are a necessary part of the WiFi protocol. However, these packets are often unprotected. This means that any WiFi device can theoretically craft packets that disconnect nearby connections. All they need to know is the sender and receiver address, which can be observed by passivly scanning for WiFi devices.

:::tip
To learn more about deauth packets, check out my blog post: [WiFi Deauthentication Frame Explained](https://blog.spacehuhn.com/wifi-deauthentication-frame)
:::

To effectively prevent a deauthentication attack, both the client and access point must support [protected management frames (PMF)](https://www.wi-fi.org/knowledge-center/faq/what-are-protected-management-frames). 

In 2009 the WiFi Alliance provided a fix for the problem ([802.11w](https://en.wikipedia.org/wiki/IEEE_802.11w-2009)), but most devices didn't implement it. This is finally changing in 2021 with the introduction of [WiFi 6](https://en.wikipedia.org/wiki/Wi-Fi_6)! Although it's not a guarantee to be safe, I found that most WiFi 6 certified devices are immune to this attack. But remember that it requires both access point and client to support the new standard.

## WiFi Jammer

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gOyfD44A7rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Many refer to this project as a WiFi jammer. This can be misleading because this firmware is **not** turning an ESP8266 into a radio or frequency jammer. Although radio jamming and deauthing are both denial of service attacks, deauthing only affects targeted WiFi devices. In contrast, jamming affects every wireless communication device of a specific frequency in its range.  
It's really dangerous when you cannot know/control what you are disrupting and how. This is why jamming is illegal almost everywhere.  

:::danger
Deauthing is ok as long as you do it only against your own devices. If you choose to attack other networks, you become liable for the damage you cause.  
:::
