---
title: 'FAQ'
description: 'Frequently Asked Questions about the ESP8266 Deauther'
sidebar_position: 70
---

## 5GHz Support
This project is done for the ESP8266, a 2.4GHz WiFi SoC. Therefore, it cannot attack 5GHz WiFi networks.  
But I made this tutorial on my [blog](https://blog.spacehuhn.com/5ghz-deauther/).  

## ESP32 Support
This project is made for the ESP8266 and cannot run on an ESP32.  
For details, check my [ESP32 Deauther blog post](https://blog.spacehuhn.com/esp32-deauther/).  

## Deleting the Deauther firmware
To remove the Deauther from your ESP8266, simply flash it with another firmware. 
You can, for example, use our [reset sketch](/docs/usage/reset#reset-using-reset-sketch). 

## Attack stopping after 5min
To prevent abuse, an attack timeout of 5 minutes is set by default. 
This is not a bug. It's a feature. To change this, you have to edit the `attackTimeout` setting. 