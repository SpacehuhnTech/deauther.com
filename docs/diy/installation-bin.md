---
title: 'Installation (.bin)'
description: 'How to flash the Deauther firmware binary onto an ESP8266.'
sidebar_position: 20
---

:::tip
This installation method is the easiest. But if you're looking to modify the code, follow the [Arduino IDE tutorial](http://localhost:3000/docs/diy/.installation-arduino).
:::

1. Get a .bin file for your board from the [Downloads](/docs/download) page
2. Connect your ESP8266 board via USB
3. Open [esp.huhn.me](https://esp.huhn.me) in Chrome, or another supported browser
4. Click Connect and select the serial port of your ESP
5. Select your Deauther .bin file
6. Click Program

![Animated ESP Web Tool workflow GIF](/img/diy/espwebtool.gif)

## Finding the correct port

If you don't know which serial port to select, click connect on [esp.huhn.me](https://esp.huhn.me) and then plug in your board. Whatever port pops up in the list is what you're looking for.

You should check the cable and USB port if no new port pops up. 
Some USB cables are only for charging and cannot transmit data. 

Or maybe you're missing the drivers for your device:

🔗 CH340/CH341 Drivers: [http://www.wch-ic.com/downloads/CH341SER_ZIP.html](http://www.wch-ic.com/downloads/CH341SER_ZIP.html)  
🔗 CP210x Drivers: [https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)  
🔗 FTDI Drivers: [https://ftdichip.com/drivers/](https://ftdichip.com/drivers/)

## Alternatives

My ESP web tool is not the only software you can use to flash your ESP8266: 
* [esptool](https://github.com/espressif/esptool)
* [ESP flash download tools](https://www.espressif.com/en/support/download/other-tools)
* [esptool-gui](https://github.com/Rodmg/esptool-gui)

And if you're looking for something Deauther-specific, check out n2d: [https://github.com/realmrvodka/n2d/](https://github.com/realmrvodka/n2d/)

## Connection failed?

Make sure to set the baud rate to 115200 in the settings. Higher baud rates allow faster upload speeds but can also introduce connection issues.

If that doesn't help, check out this blog post about common ESP8266 and ESP32 errors: [https://blog.spacehuhn.com/espcomm/](https://blog.spacehuhn.com/espcomm/)

And if you run into other issues, try using a different flashing tool/method. 