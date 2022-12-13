---
title: 'Display Interface'
description: 'How to navigate the display UI of the Deauther V2.'
sidebar_position: 20
---

Unlike the serial and web interface, this requires a Deauther with OLED display. 

It uses a 128x64 pixel monochrome OLED display. These small and affordable displays are great for tinkering with electronics. Learn more about building your own Deauther OLED [here](/docs/diy/display-setup).

At startup, the Deauther scans for nearby networks. Give it a couple of seconds. The LED is blue while scanning and turns green once the scan is complete and the device is ready.

:::info
I'm using the DSTIKE Deauther Watch here (get one at [DSTIKE.com](https://dstike.com/collections/all/deauther#MainContent)). But other [supported hardware](http://localhost:3000/docs/diy/supported-devices) works too.
:::

![Turning on DSTIKE Deauther Watch](/img/usage/watch1.gif)

Navigation works by pressing the up, down, and select buttons. On the Deauther Watch, this is done with the 3-way switch on the side.

![deauther-watch-buttons.gif](/img/usage/watch2.gif)

## Scan

![Deauther Scan Menu](/img/usage/watch3.jpg)

In the scan menu, you can initiate 3 different types of scans. You can scan for nearby WiFi Access Points (APs), WiFi Client Stations (STs), or both.

![Deauther active Scan](/img/usage/watch4.jpg)

Scanning for APs only takes a couple of seconds and will reveal all nearby networks. However, a station scan takes longer and can only find active clients while the scan is running. So it's not guaranteed that you will find a client device on the first try.

## Select

![Deauther Select Menu](/img/usage/watch5.jpg)

The select menu is where you select your targets for an attack. So this is where you find the APs and Stations from the scan, but also SSIDs for a beacon attack or other saved devices under Names.

![Deauther Select AP Menu](/img/usage/watch6.jpg)

One thing to keep in mind is that the display interface only allows you to use the essential functions of the Deauther. For example, to edit the SSIDs or Names,  you have to use the [web interface](https://blog.spacehuhn.com/deauther-web-interface/) or [serial interface](https://blog.spacehuhn.com/deauther-serial-interface/).

## Attack

![Deauther Attack Menu](/img/usage/watch7.jpg)

On the attack page, you start and stop different WiFi attacks:

- DEAUTH is the deauthentication attack that will disconnect all selected devices. 
- BEACON is a beacon flooding attack
- PROBE is a probe request flooding attack

![Deauther running an attack](/img/usage/watch8.jpg)

You can see the packets per second being sent. Here it's sending slightly more than planned. This is on purpose. It's better to overshoot for one packet than to underdeliver. Depending on the selected targets, settings, and WiFi traffic around you, this number might be different for you.

## Packet Monitor

![Deauther Packet Monitor Menu](/img/usage/watch9.jpg)

Here you see the WiFi traffic around you visualized. Switch channels with the up and down buttons. The number in the brackets indicates deauth packets, so you can check if an attack is active in your area.

## Clock

![Deauther Clock Menu](/img/usage/watch10.jpg)

The clock menu is a feature requested by many customers of the DSTIKE Deauther Watch. You can set a time and display it. It helps make it appear as a regular smartwatch. But only expect that fundamental functionality.

![Deauther running the clock feature](/img/usage/watch11.jpg)
