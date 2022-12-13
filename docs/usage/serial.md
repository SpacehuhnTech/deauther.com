---
title: 'Serial Interface'
description: 'How to use the Deauther V2 Serial Interface.'
sidebar_position: 30
---

1. Open [serial.huhn.me](https://serial.huhn.me) with Chrome, Edge, or Opera for desktop. (Other browsers are not supported at the moment)
    
2. Click Connect
    
3. Plugin your ESP8266 board
    
4. Select the port that pops up in the list and click connect
    
![Using serial.huhn.me](/img/usage/serialhuhn.gif)

:::info
[serial.huhn.me](https://serial.huhn.me) is an online serial terminal. You don't need to install it. You only need a compatible browser. Learn more in our [blog post](https://blog.spacehuhn.com/serial-terminal).
:::

## Command Reference

You can find a list with all serial commands at [Serial Commands](/docs/usage/serial-commands)

## Escaping Spaces

In the serial interface, commands and parameters are divided by spaces.

This command is OK:

```plaintext
add ssid test
```

This command isn't:

```plaintext
add ssid this is a test
```

To escape these spaces, you can use a backslash. For example:

```plaintext
add ssid this\ is\ a\ better\ test
```

But a better approach is to use double quotes ". For example:

```plaintext
add ssid "this is an even better test"
```

## Combine Serial Commands

To chain multiple commands into one line, separate them with two semicolons ;;

```plaintext
sysinfo;;chicken
```

This example will first execute "sysinfo" and then "chicken".

There is no limit on the number of commands you can combine with this feature, but **there is a limit of 512 characters per line!**

Some commands like "scan" work asynchronously and don't block. To chain commands like this, you can make use of the "DELAY" command:

```plaintext
scan wifi -t 10s -ch 6;;DELAY 11s;;show stations
```

This example will scan for 10 seconds on channel 6 and wait 11 seconds before printing the results. *Note that it's always better to use a higher delay than you expect the previous command to run, just to be on the safe side.*

## SPIFFS

The ESP8266 has a memory chip of usually 1,2 or 4 MB of storage - depending on the model, it could be up to 16 MB or as low as 512 KB. The firmware itself is saved there, together with some other configuration settings.

SPIFFS (SPI Flash File System) is a small simplistic file system to easily access the internal memory. It's particularly useful to store and access data that doesn't fit into the RAM.

You can see how much of the SPIFFS is free and what files are stored there with the sysinfo command:

```plaintext
sysinfo
```

You can see the contents of a file using:

```plaintext
print <path_to_file>
```

To delete a file, run:

```plaintext
delete <path_to_file>
```

Sometimes the file system gets corrupted, and you will see errors like "ERROR: saving /settings.json". If that happens, clear the memory by running:

```plaintext
format
```

## Alternatives

### Using Arduino IDE

1. Connect the ESP8266 board to your computer
    
2. Open Arduino, go to **Tools** &gt; **Port**, and select the corresponding serial (COM) port
    
3. Go to **Tools** and click on **Serial Monitor**
    
4. Select **Newline** and **115200** as baudrate
    

![Arduino select Serial Port](/img/usage/arduinoserial1.jpg)

![Arduino Open Serial Monitor](/img/usage/arduinoserial2.jpg)

![Arduino Serial Monitor: Select Newline  115200 baud](/img/usage/arduinoserial3.jpg)

![Startup message of Deauther Serial Interface](/img/usage/arduinoserial4.jpg)

### Using Huhnitor

Huhnitor was made for the Deauther V3 but works on the V2 just as well. Check out [our tutorial](https://blog.spacehuhn.com/huhnitor-installation/)