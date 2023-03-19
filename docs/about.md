---
title: 'About'
description: 'ESP8266 Deauther. Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!'
sidebar_position: 10
---

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AboutFeatures from '@site/src/components/AboutFeatures';

# ESP8266 Deauther

<img src='/img/logo.png' alt='Deauther Logo' width='200' />

Scan for WiFi devices, block selected connections, create dozens of networks and confuse WiFi scanners!

<Box mb={2}>
<Button variant='contained' color='success' href='buy' sx={{mr:.5,mb:.5}}>Buy Now</Button>
<Button variant='contained' color='primary' href='diy/installation-bin' sx={{mr:.5,mb:.5}}>Installation</Button>
<Button variant='contained' color='primary' href='download' sx={{mr:.5,mb:.5}}>Download</Button>
<Button variant='contained' color='primary' href='https://github.com/spacehuhntech/esp8266_deauther' target='_blank' sx={{mr:.5,mb:.5}}>Github</Button>
</Box>

:::tip
The WiFi password for `pwned` is `deauther` in case you were looking for it 😉
:::

## Functions

* Scan for WiFi networks and clients
* Create docents of WiFi networks (beacon flooding)
* Confuse WiFi trackers by sending fake [probe requests](https://blog.spacehuhn.com/probe-request) (probe flooding)
* Disconnect selected devices by sending [deauth packets](https://blog.spacehuhn.com/wifi-deauthentication-frame) (deauthentication attack)

## Featured On

<AboutFeatures />

<br />

<iframe src="https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=spacehuhntech&repo=esp8266_deauther&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

## About this Project

This firmware allows you to easily perform a variety of actions to test 802.11 networks using an [ESP8266](https://www.espressif.com/en/products/socs/esp8266). It's also a great project for learning about WiFi, microcontrollers, Arduino, hacking and electronics/programming in general.  

The deauthentication attack is the main feature, which can be used to disconnect devices from their WiFi network.  
Although this denial-of-service attack is nothing new, a lot of devices are still vulnerable to it. Luckily this is slowly changing with more WiFi 6 enabled devices being used. But a lot of outdated WiFi devices remain in place, for example in cheap IoT hardware.
With an ESP8266 Deauther, you can easily test this attack on your 2.4GHz WiFi network/devices and see whether it's successful or not. And if it is, you know you should upgrade your network.

:::caution Disclaimer
This project is a proof of concept for testing and educational purposes.  
Neither the ESP8266, nor its SDK was meant or built for such purposes. **Bugs can occur!**  

**Use it only against your own networks and devices!**  
Please check the legal regulations in your country before using it.  
We don't take any responsibility for what you do with this program.  
:::

## About me

<img src='/img/spacehuhn.png' alt='' width='200' />

Hi, I'm Spacehuhn. I make open-source hacking tools for microcontrollers. 
If this sounds interesting, check out my [website](https://spacehuhn.com/), where you will find links to my social media and other projects.