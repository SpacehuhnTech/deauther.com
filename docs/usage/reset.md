---
title: 'Password forgotten (reset)'
description: 'How to restore the default settings if you have forgotten the password of your Deauther.'
sidebar_position: 60
---

There are multiple ways to reset. You can send it a reset command via the USB serial connection - or you can override the firmware and settings by flashing it again.

:::tip
It's sufficient to choose **one **reset method. You don't need to follow each one. If you're unsure which path to pick, simply choose the first or whichever sounds more familiar/easier to you.
:::

## Reset via Serial.Huhn.me

[Serial.huhn.me](https://serial.huhn.me) is our online serial terminal. You don't need to install anything. You only need a compatible browser. Learn more in our [blog post](https://blog.spacehuhn.com/serial-terminal).

1. Open [serial.huhn.me](https://serial.huhn.me) with Chrome, Edge, or Opera for desktop. (Other browsers are not supported at the moment)
2. Click Connect
3. Plugin your ESP8266 board
4. Select the port that pops up in the list and click connect
5. Type `reset` and press enter
6. Type `save` and press enter 

![Connecting to and resetting Deauther using serial.huhn.me](/img/usage/reset.gif)

## Reset via Huhnitor

[Huhnitor](https://huhnitor.com) is a cross-platform Rust-based serial monitor that runs in a terminal. It's made for interfacing with [Deauther V3](https://github.com/SpacehuhnTech/esp8266_deauther/tree/v3) easier through the USB serial command line, but you can also use it with any other version of the Deauther.

We already have an [Huhnitor Installation Tutorial](https://blog.spacehuhn.com/huhnitor-installation/) that you can check out. 
But for Windows users, installing is as easy as downloading a .exe file from [the project's GitHub](https://github.com/SpacehuhnTech/Huhnitor/releases/tag/1.1.2) and opening it.

1. Start Huhnitor
2. Plugin your ESP8266 Deauther. It should automatically detect and connect to it via USB serial.
3. Type `reset` and press enter
4. Type `save` and press enter 

Done 🎉

![Animated GIF showing how to reset Deauther via Huhnitor](/img/usage/huhnitorreset.gif)

## Reset via Arduino IDE

[Arduino IDE](https://www.arduino.cc/en/software) is a popular tool among makers. You might have already used it to flash the Deauther firmware onto an ESP8266.

Here's what you have to do:

1. Open Arduino IDE
2. Plugin your Deauther
3. Select the COM port of your Deauther at `Tools` > `Port`
4. Open the Serial Monitor at `Tools` > `Serial Monitor`
5. At the bottom of the Serial Monitor window, select `Newline` and `115200 baud`
6. Type `reset` and press enter
7. Type `save` and press enter 

Done 🎉

![Animated GIF showing how to reset Deauther via Arduino IDE](/img/usage/arduinoreset.gif)

:::tip
Another way to reset all settings is by flashing the firmware again. This option is great for anyone who wants to update and reset their Deauther simultaneously. See [Installation (Arduino IDE)](/docs/diy/installation-arduino)
:::

Done 🎉

## Reset using Reset Sketch

If nothing else works, there is also a reset sketch we made to erase the memory of the ESP8266. 
You have to flash this sketch just like you would install the Deauther.

Reset sketch Arduino file & .bin files: [https://github.com/SpacehuhnTech/esp8266_deauther/tree/v2/Reset_Sketch](https://github.com/SpacehuhnTech/esp8266_deauther/tree/v2/Reset_Sketch)

Keep in mind that the reset sketch also overrides the ESP8266 Deauther firmware. So you will need to install it again afterward.