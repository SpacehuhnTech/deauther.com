---
title: 'Version 3'
description: 'Deauther V3. Differences explained.'
sidebar_position: 90
---

## Difference

| Feature | Version 2 | Version 3|
| ------- | ---------- | --------- | 
| Web Interface | ✅ | |
| Display support | ✅ | |
| Serial Command Line | ✅ | ✅ |
| Scanner | ✅ | ✅ |
| Deauth attack | ✅ | ✅ |
| Beacon attack | ✅ | ✅ |
| Probe attack | ✅ | ✅ |
| Huhnitor support | | ✅ |
| Signal strength scanner | | ✅ |
| Authentication scanner | | ✅ |
| Rogue AP | | ✅ |

Both versions share the same basic functionalities like Deauth-, Beacon-, and Probe attack and communication over the serial command line. They also let you scan your local network for access points and clients. 

Where they differ is mainly in how you control them, affecting the set of features available.
Where v2 uses a web interface (and/or a display and buttons), Deauther v3 plugs directly into a computer via USB. It can only be controlled using a serial terminal (our [online serial terminal](https://serial.huhn.me) makes that process a lot easier).

## ESP8266 Deauther V2

![Using Deauther V2 Web-Interface on an Android phone](/img/deautherv3/v2.jpg)

Deauther version 2 is excellent for standalone devices, like our [Hackheld](https://www.youtube.com/watch?v=3gI2dTkNN_A) because it only needs the USB connection for power delivery. 

You can control it through the web interface by connecting to the *pwned* network and opening the URL *192.168.4.1* in a browser. This is ideal if you want to place a Deauther somewhere and interact with it remotely.

An alternative offers the support for a small OLED display and a couple of buttons. Then you can control it without requiring another device entirely.

## ESP8266 Deauther v3

![Huhnitor interface](/img/deautherv3/v3.jpg)

Deauther version 3 was designed from the ground up with a focus on a powerful command-line interface (CLI), which is accessible through a USB serial. 
The web interface and display support from version 2 have not been implemented. This is so that the ESP8266 hardware (CPU, memory, and WiFi transceiver) can be fully utilized for features like signal strength scanning, authentication detector, or rogue access points. 

This is also why we designed our Deauther Andromeda not as a standalone device but instead as an accessory to your computer. Its USB-A plug can be easily connected and then controlled through a serial connection.

:::info
This website/documentation is based around the Deauther V2.  
For more info on V3, visit our Blog: [blog.spacehuhn.com](https://blog.spacehuhn.com/series/deautherv3).  
Or check out the [Github Repository](https://github.com/SpacehuhnTech/esp8266_deauther/tree/v3). 
:::

## TL;DR:

The core features are the same, but Deauther V2 is best for standalone devices with its display support and web interface. 

Deauther v3 is instead made to plug directly into a computer and used as a terminal application.