---
title: 'Serial Commands'
description: 'Reference for all available serial interface commands.'
sidebar_position: 50
---

## HELP
`help`  
Prints a list with all commands.  

## SCAN  
`scan [<all/aps/stations/wifi>] [-t <time>] [-c <continue-time>] [-ch <channel>]`  
**Starts scan with given parameters.**  
**Modes** (optional, default = all): 
  - all (-a)  
  - aps (-ap)  
  - stations (-st)  
  - wifi (-w)  
**Mode must be the first parameter!**
**time** [-t] (optional, default = 15s): How long it should scan for stations (client devices) in seconds.  
**continue** [-c] (optional): How many seconds until it should scan again.  
**channel** [-ch] (optional): Only scan on a specific channel instead of automatically going through them.  
To scan indefinitely, set the time to 0, i.e., `scan stations -t 0`.  
The difference between mode `stations` and mode `wifi` is that `stations` will only scan on channels used by at least one access point.  
The `wifi` scan mode also doesn't require an access point scan first and is recommended for using the deauth detection and packet monitor feature.  

## SHOW
`show [<all/aps/stations/names/ssids>]`  
`show selected [<all/aps/stations/names/ssids>]`  
Prints out the scan results (access points and stations), the saved device names, and the saved ssids.  
**Selected** (optional, default = false): Only the selected targets are printed.  
**Types** (optional, default = all):  
  - all (-a)  
  - aps (-ap)  
  - stations (-st)  
  - names (-b)  
  - ssids (-ss)  
  
## SELECT-DESELECT
`select [<all/aps/stations/names>] [<id>]`  
`deselect [<all/aps/stations/names>] [<id>]`  
(De)Selects a specific or all access points, stations, and device names.  
**Types** (optional, default = all):
  - all (-a)  
  - aps (-ap)  
  - stations (-st)  
  - names (-b)  
  
**ID** (optional): ID of the AP/station/device you want to select.  

## ADD-SSID
`add ssid <ssid> [-wpa2] [-cl <clones>] [-f]`  
Adds SSID with given parameters to the list.  
**ssid**: The SSID you want to add to the list.  
**-wpa2** (optional, default = false): If the SSID you add should be an open or WPA2 encrypted network.  
**clones** [-cl] (optional, default = 0): How many SSIDs you want to add with that name.  
**force** [-f] (optional, default = false): Forces adding of ssid, even if the list is full.  

`add ssid -ap <id> [-cl <clones>] [-f]`  
Copies SSID from scanned access point and add it to the list.  
**clones** [-cl] (optional, default = 0): How many SSIDs you want to add with that name.  
**force** [-f] (optional, default = false): Forces adding of ssid, even if the list is complete.  

`add ssid -s [-f]`  
Copies SSIDs from selected access points into the list.  
**force** [-f] (optional, default = false): Forces adding of ssid, overwrites old SSIDs.  

## ADD-NAME
`add name <name> -ap <id> [-s] [-f]`  
`add name <name> -st <id> [-s] [-f]`  
`add name <name> -m <mac> [-ch <channel>] [-b <bssid>] [-s] [-f]`  
Saves device with given name and parameters.  
**name** [-n]: Name you want to give the device (max.16 characters!).  
**ap** [-ap]: Access point you want to save.  
**station** [-st]: Station you want to save.  
**mac** [-m]: MAC address of the device.  
**channel** [-ch] (optional, default = current channel): Channel the device is on.  
**bssid** [-b] (optional, default = NULL): The MAC address of the access point it's connected to.  
**select** [-s] (optional, default = false): Select the device after adding it.  
**force** [-f] (optional, default = false): Forces adding a name, even if the list is full.  

## REPLACE NAME
`replace name <id> [-n <name>] [-m <mac>] [-ch <channel>] [-b <bssid>] [-s]`  
Removes name with the given ID and creates a new one with the given parameters.  

## SET-NAME
`set name <id> <newname>`  
Changes the name of a saved device.  
**id**: ID of the saved name you want to change.  
**newname**: New name you want to give that device.  

## RANDOM
`enable random <interval>`  
Enables SSID random mode with a given interval in seconds.  

`disable random`
Disables SSID random mode.  

## LOAD-SAVE
`load [<all/ssids/names/settings>] [<file>]`  
`save [<all/ssids/names/settings>] [<file>]`  
Loads/saves the SSID list, device name list, and settings.  
**Types** (optional, default = all):
  - all (-a)
  - ssids (-ss)
  - names (-n)
  - settings
**File** (optional): Where to load/save the file. It will use the default file name when the parameter isn't set.  

## REMOVE
`remove <ap/station/name/ssid> <id>`  
Removes specific SSID or name from the list.  
**Types**:
  - ap (-ap) 
  - station (-st) 
  - name (-n)  
  - ssid (-ss) 

`remove <ap/station/names/ssids>`  
`remove <ap/station/names/ssids> [all]`  
Removes everything from the selected list.  
**all** [-a] (optional, default = true): Remove all.

## ATTACK
`attack [beacon] [deauth] [deauthall] [probe] [nooutput] [-t <timeout>]`  
Starts attack with given parameters (1 or more is required):  
- **beacon** [-b] (optional, default = false)
- **deauth** [-d] (optional, default = false)
- **deauthall** [-da] (optional, default = false)
- **probe** [-p] (optional, default = false)
- **nooutput** [-no] (optional, default = false): Will stop printing out the packets per second.
- **timeout** [-t] (optional, default = settings.attackTime): Will change the attack timeout time in the settings.  

**PLEASE NOTE** that *deauthall* will deactivate *deauth* and vice versa.  
You can only run one at a time!  

## ATTACK STATUS
`attack status [<on/off>]`  
Enables or disables printing the attack status (pkts/s) every second (only when an attack is running).  

## SYSINFO
`sysinfo`  
Prints out RAM usage, current WiFi channel, the MAC addresses, SPIFFS (SPI-Flash-File-System usage and files.  

## CLEAR
`clear`  
Clears the serial console.  

## FORMAT
`format`  
Deletes all files in the SPIFFS (SPI-Flash-File-System).  

## PRINT
`print <file> [lines]`  
**lines** [-l] (optional, default = false): Show line numbers.   
Prints out a file from SPIFFS (SPI-Flash-File-System) to the serial console.  

## DELETE
`delete <file>`  
Deletes file from the SPIFFS (SPI-Flash-File-System).  
`delete <file> <lineFrom>`  
Removes a specific line from a file.  
`delete <file> <lineFrom> <lineTo>`  
Removes particular lines from a file.  
**The first line number is 0!**  

## REPLACE
`replace <file> <line> <new-content>`  
Replaces specific lines of the file with given content.  

## COPY
`copy <file> <newfile>`  
Makes a copy of a file in the SPIFFS.  

## RENAME
`rename <file> <newfile>`  
Renames a file in the SPIFFS.  

## GET
`get <setting>`  
Prints out the value of the setting.  

## SET
`set <setting> <value>`  
Changes the value of the setting.  

## RESET
`reset`  
Resets the settings.  

## STOP
`stop [<all/scan/attack/script>]`  
Stops ongoing tasks.  
**Modes** (optional, default = all):
  - all (-a)
  - scan (-sc)
  - attack (-a)
  - script

## CHICKEN
`chicken`  
Prints out a HUGE space chicken.  

## REBOOT
`reboot`  
Performs a hard reset (just like connecting the RST pin to GND).  

## RUN
`run <file> [-c <continue-time>]`  
Executes script with given filepath.  
**continue** [-c] (optional, min=1s, default time is 10s): How many seconds until it should rerun the script.  
Please don't use this command within a script! It won't work, but it might lead to errors or unexpected behavior.  

## WRITE
`write <file> <commands>`  
Writes (appends) a command to the given file and saves it.  
**Please note** that this command has, like all commands, a limit of 512 characters and, therefore, shouldn't be used to write extensive files.

## INFO
`info`  
Shows the version number, copyright info, and a link to GitHub.  

## COMMENT
`// <comments>`  
Commands that begin with `#` will be printed out as they are and not be tried to execute.  
There **must** be a space between the hash sign and the comments.  
The hash sign also **has** to be at the beginning of the command!  

## SEND
`send deauth <AP-MAC> <ST-MAC> <reason> <channel>`  
`send beacon <mac> <ssid> <ch> [wpa2]`  
`send probe <mac> <ssid> <ch>`  
Sends a single packet out with giving parameters.  

You can also send out custom packets with: `send packet <packet>`  
The packet must be a hexadecimal string divided by `:` and with a leading zero.  
Using this feature is only recommended if you have experience with how the ESP8266 handles sending custom-defined packets.  
Copy-pasting packets out of Wireshark is unlikely to work.  
Also, note that you're still limited to 512 characters per command!  

## LED
`led <r> <g> <b>`  
Changes LED color based on input.  
Be sure to disable the LED updates (see command below) if you don't want the color overwritten by a scan or attack.   

`led <#rrggbb>`  
Changes LED color based on input in the form of a hex value.  
The value **must** start with a `#` and have 6 following characters.  

## DELAY
`delay <time>`  
Will pause the serial command interface for a given time.  
`delay 1000` will wait one second.  
But you can also specify the delay time in seconds directly:  
`delay 1s`.  

## DRAW
`draw [<height>] [<width>]`  
Draws packet monitor graph.  
It will only work if you run a wifi scan first, i.e., `scan wifi -t 65s -ch 1`.  
- **height** (optional, default = 25): Height of the graph in characters.  
- **width** (optional, default = 2): Width in characters per bar in the graph.  

## STARTAP
`startap [-p <path][-s <ssid>] [-pswd <password>] [-ch <channel>] [-h] [-cp]`  
Starts access point.  
- **path** [-p] (optional, default = "/web"): Path to web files.  
- **ssid** [-s] (optional, default = [settings ssid](/docs/usage/settings)): Network name.  
- **password** [-pswd] (optional, default = [settings password](/docs/usage/settings)): Password.  
- **channel** [-ch] (optional, default = [settings channel](/docs/usage/settings)): Channel .  
- **hidden** [-h] (optional, default = [settings hidden](/docs/usage/settings)): Hide SSID.  
- **captiveportal** [-cp] (optional, default = [settings captiveportal](/docs/usage/settings)): Enable captiveportal.  

`stopap`  
Stops access point.  

## SCREEN
`screen <on/off>`  
Turns display on or off. To reactivate the display, press the A (select) button.  

`screen mode <menu/packetmonitor/buttontest/loading>`  
Changes display mode.  
- **menu**: default mode when using the display interface
- **packetmonitor**: draws packet graph (will only work when you're scanning at the same time)
- **buttontest**: special mode for testing the buttons
- **loading**: loading screen that is used when starting a scan over the display menu