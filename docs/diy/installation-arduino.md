---
title: 'Installation (Arduino IDE)'
description: 'How to compile the Deauther firmware using Arduino.'
sidebar_position: 30
---

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

:::tip
If you're looking for a more straightforward installation method, follow the [.bin file tutorial](/docs/diy/installation-bin).
:::

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NbRu9t7z3Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Box my={2}>
<Button variant='contained' sx={{mr:.5,mb:.5}} target='_blank' href='https://github.com/SpacehuhnTech/esp8266_deauther/archive/v2.zip'>Download Deauther</Button>
<Button variant='contained' sx={{mr:.5,mb:.5}} target='_blank' href='https://www.arduino.cc/en/software'>Download Arduino IDE</Button>
</Box>

1. Extract the ESP8266 Deauther zip you [downloaded](/docs/download)
2. Go into the `esp8266_deauther` folder and open `esp8266_deauther.ino` with Arduino IDE
3. In Arduino IDE, go to `File` > `Preferences` and add this URL to the `Additional Boards Manager URLs`: 
`https://raw.githubusercontent.com/SpacehuhnTech/arduino/main/package_spacehuhn_index.json`
4. Now go to `Tools` > `Board` > `Boards Manager`, search `deauther`, and install `Deauther ESP8266 Boards`
5. Select your board at `Tools` > `Board` and be sure it is at `Deauther ESP8266 Boards` (and **not** at `ESP8266 Modules`)!
6. Plugin your Deauther and select its COM port at `Tools` > `Port`
7. Optional: To reset/override previous settings select `Tools` > `Erase Flash` > `All Flash Contents`
8. Press upload

Done 🎉

![Animation showing how to reset Deauther by reflashing it via Arduino IDE](/img/diy/arduino-tutorial.gif)