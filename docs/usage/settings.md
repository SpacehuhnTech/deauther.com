---
title: 'Settings'
description: 'Deauther settings explained and how to change them.'
sidebar_position: 40
---

| Setting          | Default                                                                                     | Info                                                                                                                                                                                         |
|------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| version         | | Version number, i.e. v2.0. Can only be changed in the source code.                          |
| ssid             | pwned                                                                                       | SSID of access point used for the web interface (if enabled). The length must be between 1 and 31 characters.                                                                                |
| password         | deauther                                                                                    | Password of access point used for the web interface (if enabled). The length must be between 8 and 31 characters.                                                                            |
| channel          | 1                                                                                           | Default WiFi channel used when starting.                                                                                                                                                     |
| hidden           | false                                                                                       | Hides the access point used for the web interface.                                                                                                                                           |
| captivePortal    | true                                                                                        | Enables captive portal for access point (if enabled).                                                                                                                                        |
| lang             | en                                                                                          | Default language for the web interface. Be sure the language file exists!                                                                                                                    |
| autosave         | true                                                                                        | Enables automatic saving of SSIDs, device names, and settings.                                                                                                                               |
| autosaveTime     | 30000                                                                                       | Time interval for automatic saving in milliseconds.                                                                                                                                          |
| displayInterface | false                                                                                       | Enables display interface.                                                                                                                                                                   |
| displayTimeout   | 600                                                                                         | Time in seconds, after which the display turns off when inactive. To disable the timeout, set it to 0.                                                                                       |
| serialInterface  | true                                                                                        | Enables serial interface.                                                                                                                                                                    |
| serialEcho       | true                                                                                        | Enables echo for each incoming message over serial.                                                                                                                                          |
| webInterface     | false                                                                                       | Enables web interface.                                                                                                                                                                       |
| webSpiffs        | false                                                                                       | Enables SPIFFS for all web files. Makes uploading new web files easier, at the cost of longer loading times.                                                                                 |
| ledEnabled       | true                                                                                        | Enables the (RGB) LED feature.                                                                                                                                                               |
| maxCh            | 13                                                                                          | Max channel to scan on. US = 11, EU = 13, Japan = 14.                                                                                                                                        |
| macAP            | | Mac address used for the access point mode. Set a random mac address with set macap random. |
| macSt            | | Mac address used for the station mode. Set a random mac address with set macst random.      |
| chTime           | 384                                                                                         | Time for scanning one channel before going to the next in milliseconds (only if channel hopping is enabled).                                                                                 |
| minDeauths       | 3                                                                                           | Minimum number of deauthentication frames when scanning to change the LED to deauth mode.                                                                                                    |
| attackTimeout    | 600                                                                                         | Amount of time (in seconds), after which the attack will stop automatically. Set it to 0 to disable it.                                                                                      |
| forcePackets     | 1                                                                                           | How many attempts to send out a packet. Set this value higher to achieve a better packet rate in a busy area. This setting could make the device slower or more unstable. Max value is 255.  |
| deauthsPerTarget | 10                                                                                          | Amount of deauthentication and disassociation frames sent per target.                                                                                                                        |
| deauthReason     | 1                                                                                           | The reason code sent in the deauth frames. Tells the target device why the connection will be closed.                                                                                        |
| beaconChannel    | false                                                                                       | Sends all beacon and probe frames on different channels.                                                                                                                                     |
| beaconInterval   | false                                                                                       | Send beacon frame each second (true). Or send them each 100ms (false). A longer interval means more stability and less spamming of packets, but it could take longer until clients see them. |
| randomTX         | false                                                                                       | Enables randomized transmission power for sending out beacon and probe request frames.                                                                                                       |
| probesPerSSID    | 1                                                                                           | How many probe requests send per SSID.                                                                                                                                                       |

## Changing Settings (Web Interface)

![ESP8266 Deauther V2 Settings page](/img/usage/settings1.png)

1. Connect to the WiFi network `pwned`with password `deauther`
2. Open `192.168.4.1` in a browser
3. Navigate to Settings (navbar on the right)
4. Adjust the settings to your preference
5. Click save (on the left, above the list)

## Changing Settings (Serial)

:::info
You need a serial connection for this one. See [Serial Interface](http://localhost:3000/docs/usage/serial) for more info.
:::

1. Open a Serial Terminal of your choice
2. Connect your Deauther/ESP8266 Board (115200baud, \n)
3. To view your current settings type `get settings`
4. To change a setting, use the set command. For example: `set password "my new cool pswd"`
5. To save your settings type `save`

![Deauther Settings via Serial](/img/usage/settings2.gif)