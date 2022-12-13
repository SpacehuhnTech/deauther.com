---
title: 'Web Interface'
description: 'Everything you need to know about the ESP8266 Deauther V2 Web Interface.'
sidebar_position: 10
---

To access the web interface, your Deauther must be running, and you have to be connected to its WiFi network `pwnd` using the password `deauther`.

Then open your browser and visit [192.168.4.1](http://192.168.4.1 ). Make sure you're not connected to a VPN or anything else that could get in the way. You have to temporarily disable the mobile connection on some phones to make it work. 

If you can't see a `pwned` network, ensure ESP8266 Deauther firmware was successfully installed. We made a tutorial for that, which you can find [here](/docs/diy/installation-bin).

## Home / Warning Page

![ESP8266 Deauther Home / Warning Page](/img/usage/home.jpg)

The first thing you'll probably see when you open the web interface is a warning that you must confirm to continue.

We felt this was necessary when making it since many users would abuse our tool and spread misinformation about how it works. 

## Scan Page

![Deauther Scan Page](/img/usage/scan.jpg)

On the scan page, you can discover access points (WiFi networks) and stations (client devices) nearby. If the access point list is empty, click on `SCAN APS`.

A scan takes a few seconds (usually 2 - 5 seconds). Depending on your board, you might see a LED turning on when starting the scan. As soon as the scan is finished, it turns off, signaling you to click on `RELOAD` to see the scan results.

![Deauther Scan Page](/img/usage/scan2.jpg)

Once you have a list of the access points, you can select them for an attack. But make sure only to select your own networks. Attacking other people's networks on purpose is strictly prohibited!

You can select multiple targets, but it's recommended to select only a single one for stability and performance reasons.

You can also scan for stations to select a specific client rather than an entire network. While a station scan is running, the web interface will be unavailable. You have to wait until it's finished and then reconnect.

## SSID Page

![Deauther SSID Page](/img/usage/ssid1.jpg)

This is where you can add, edit and remove SSIDs. An SSID (Service Set Identifier) is the name of a WiFi network. They are used in beacon and probe attacks.

![Deauther SSID Page](/img/usage/ssid2.jpg)

## Attack Page

![Deauther Attack Page](/img/usage/attack.jpg)

On the attack page, you start and stop WiFi attacks such as Deauthentication, Beacon, and Probe.

You may lose connection to the web interface when initiating an attack, but if you only select one target, you may be able to reconnect to it without problems. 
Attacks stop after 5 minutes by default. This is intended behavior to prevent abuse.

The pkts/s info is not automatically refreshed to save resources. You have to manually click `RELOAD`.

## Settings

![Deauther Settings Page](/img/usage/settings.jpg)

You can edit device settings here, such as the SSID and password of Deauther's network. But make sure to hit `SAVE` after changing something and click on `RELOAD` to refresh the site and check whether or not your changes were applied.

## Errors

When using this tool, a thing to keep in mind is that the [ESP8266 Deauther](https://github.com/spacehuhntech/esp8266_deauther) project was a proof of concept that became a popular tool for beginners to learn about WiFi hacking. 

It's not a professional tool. It's free and open source. So please understand that:

- The web interface is sometimes unstable and creates errors.
- You **will** lose connection to the Deauther when starting a scan or an attack.
- The attacks are meant for testing. They are not guaranteed to work. Learn more [here](https://blog.spacehuhn.com/deauth-attack-not-working/).
- The amount of networks and devices you are able to pick up and attack is limited by a variety of external factors, including but not limited to the transmit power of such a small device and its antenna.
