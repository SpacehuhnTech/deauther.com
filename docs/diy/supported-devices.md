---
title: 'Supported Devices'
description: 'Recommended Dev-Boards for Deauther'
sidebar_position: 10
---

import Button from '@mui/material/Button';

The most important things first:
* Any ESP8266-based development board can run the Deauther firmware
* ESP8285 is also supported (basically the same as ESP8266 but with internal flash)
* ESP32 is **not** supported as it's an entirely different chip

## Recommended Boards

The sheer amount of different boards available can create uncertainty about which one to buy.
So here we've compiled a small list of boards we can recommend.
Feel free to use this list not only for the Deauther project but as a recommendation for good ESP8266 development boards in general.

:::tip
If you want to learn more about the ESP8266 and how it is different from a development board, check out [NodeMCU vs. ESP8266](https://blog.spacehuhn.com/nodemcu-vs-esp8266/).
:::

## NodeMCU

![NodeMCU](/img/devices/nodemcu.jpg)

The NodeMCU board is probably the most popular ESP8266 development board. It's cheap, widely available, uses the ESP12 module, and has pre-soldered header pins - which come in handy when using a breadboard.

The original NodeMCU (as seen in the picture above) uses a CP2102 USB serial chip. The NodeMCU V3 is slightly bigger and uses the CH340 chip. However, both versions work the same.

Do not buy an ESP32 version if you're planning to build a Deauther. You'll need an ESP8266!

Affiliate Links:  
<Button href='https://amzn.to/3iYVMYu' target='_blank' variant='contained'>Amazon</Button>&nbsp;
<Button href='https://s.click.aliexpress.com/e/_9gMH6T' target='_blank' variant='contained'>AliExpress</Button>

## LOLIN (WEMOS) D1 mini

![Wemos D1 mini](/img/devices/d1mini.jpg)

The D1 mini is an excellent choice if the size is a concern. 
It's small, cheap, and supports add-ons. Like the NodeMCU, different versions of the D1 mini are also available. Some use a bare ESP8266 SoC with the CP2102 for serial, while others have an ESP12 module and CH240 serial chip. But they practically don't make any difference in usage.

A significant pro or con, depending on your project, is that the included header pins are not pre-soldered! Therefore, you will need a soldering iron to connect sensors, buttons, or displays.

Another important note is that this board is widely known as WEMOS D1 Mini, but the original creators actually rebranded to LOLIN. Here is a link to their [Aliexpress store](https://lolin.aliexpress.com/store/1331105). The original boards might be slightly more expensive than from other AliExpress shops but also of higher quality.

Affiliate links:  
<Button href='https://amzn.to/3DLaBYg' target='_blank' variant='contained'>Amazon</Button>&nbsp;
<Button href='https://s.click.aliexpress.com/e/_ADk3lh' target='_blank' variant='contained'>AliExpress</Button>

## Adafruit Feather HUZZAH with ESP8266

![Adafruit Feather HUZZAH with ESP8266 - source https://www.adafruit.com/product/2821](/img/devices/featherhuzzah.jpg)

The Adafruit Feather HUZZAH is a high-quality development board with a LiPo battery charger. But not only that, the Feather board layout is a common form factor for various boards, and plenty of addons are available!

Versions with and without soldered header pins are available. 
Documentation and tutorials can be found at [learn.adafruit.com](https://learn.adafruit.com/adafruit-feather-huzzah-esp8266).

If you want an easy way to add a battery to your Deauther, this is the board for you. 

<Button href='https://www.adafruit.com/product/2821' target='_blank' variant='contained'>Visit Adafruit.com</Button>