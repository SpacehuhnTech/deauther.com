import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useColorMode } from '@docusaurus/theme-common'

import SelectGroup from './SelectGroup'

const baseURL = 'https://github.com/SpacehuhnTech/esp8266_deauther/releases/download/'
const version = '2.6.1'

const urls = {
  source: {
    name: "Source Code (.zip)",
    url: "https://github.com/SpacehuhnTech/esp8266_deauther/archive/refs/heads/v2.zip"
  },
  dstike: [
    {
      name: 'Mini Evo',
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DSTIKE_DEAUTHER_MINI_EVO.bin`
    },
    {
      name: 'Monster',
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DSTIKE_DEAUTHER_MOSTER_V5.bin`
    },
    {
      name: 'OLED',
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DSTIKE_DEAUTHER_OLED_V6.bin`
    },
    {
      name: 'Watch',
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DSTIKE_DEAUTHER_WATCH_V2.bin`
    },
    {
      name: 'USB Deauther',
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DSTIKE_USB_DEAUTHER_V2.bin`
    }
  ],
  other: [
    {
      name: "D1 Mini",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_WEMOS_D1_MINI.bin`,
    },
    {
      name: "NodeMCU",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_NODEMCU.bin`,
    },
    {
      name: "Maltronics",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_MALTRONICS.bin`,
    },
    {
      name: "Hackheld Vega",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_HACKHELD_VEGA.bin`,
    },
    {
      name: "I2C Display Example",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DISPLAY_EXAMPLE_I2C.bin`,
    },
    {
      name: "SPI Display Example",
      url: `${baseURL}/${version}/esp8266_deauther_${version}_DISPLAY_EXAMPLE_SPI.bin`,
    }
  ]
}

const DownloadSelector = () => {
  const isDarkTheme = useColorMode().colorMode === "dark"

  const [stage, setStage] = useState('start')
  const [prevStages, setPrevStages] = useState([])
  const [device, setDevice] = useState({})
  const [donation, setDonation] = React.useState('')

  const goto = (newStage) => {
    setPrevStages([...prevStages, stage])
    setStage(newStage)
  }

  const back = () => {
    setStage(prevStages.pop())
  }

  const download = (device) => {
    if (device != undefined && device.url != '') window.location.assign(device.url)
    goto('thanks')
  }

  const contributeDownload = (device, value) => {
    switch (value) {
      default:
      case '5€':
        window.open('https://spacehuhn.myshopify.com/cart/43815610319112:1?channel=buy_button', '_blank').focus()
        break
      case '10€':
        window.open('https://spacehuhn.myshopify.com/cart/43815610351880:1?channel=buy_button', '_blank').focus()
        break
      case '25€':
        window.open('https://spacehuhn.myshopify.com/cart/43815610384648:1?channel=buy_button', '_blank').focus()
        break
    }
    download(device)
  }

  return (
    <Box sx={{ background: isDarkTheme ? '#222' : '#d9d9d9', borderRadius: '4px', padding: '.5rem', mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '20rem', flexDirection: 'row' }}>
        <Grid container spacing={1} justifyContent='center'>

          {/* ===== START ===== */}
          {stage === 'start' &&
            <>
              <Grid item>
                <Button sx={{ height: '4rem' }} variant='contained' size='large' onClick={() => goto('binaries')}>Binaries (.bin)</Button>
              </Grid>
              <Grid item>
                <Button sx={{ height: '4rem' }} variant='contained' size='large' onClick={() => { goto('download'); setDevice(urls.source) }}>Source Code (.zip)</Button>
              </Grid>
            </>
          }

          {/* ===== BINARIES ===== */}
          {stage === 'binaries' &&
            <>
              <Grid item>
                <Button sx={{ height: '4rem' }} variant='contained' fullWidth size='large' onClick={() => goto('dstike')}>DSTIKE</Button>
              </Grid>
              {urls.other.map(device =>
                <Grid item key={device.name}>
                  <Button sx={{ height: '4rem' }} variant='contained' fullWidth size='large' onClick={() => { goto('download'); setDevice(device) }}>{device.name}</Button>
                </Grid>
              )}
            </>
          }

          {/* ===== DSTIKE ===== */}
          {stage === 'dstike' &&
            <>
              {urls.dstike.map(device =>
                <Grid item key={device.name}>
                  <Button sx={{ height: '4rem' }} variant='contained' fullWidth size='large' onClick={() => { goto('download'); setDevice(device) }}>{device.name}</Button>
                </Grid>
              )}
            </>
          }

          {/* ===== DOWNLOAD ===== */}
          {stage === 'download' &&
            <>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ pb: 2, textAlign: 'center' }}>Support Us ❤️</Typography>
                <SelectGroup values={['5€', '10€', '25€']} value={donation} changeValue={setDonation} />
              </Grid>

              <Grid item xs={6}>
                <Button sx={{ height: '4rem' }} variant='contained' fullWidth size='large' onClick={() => download(device)}>Just Download</Button>
              </Grid>
              <Grid item xs={6}>
                <Button sx={{ height: '4rem' }} variant='contained' fullWidth size='large' onClick={() => contributeDownload(device, donation)} color='success'>Contribute & Download</Button>
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'center', my: 1 }}>Selected: {device.name}</Typography>
              </Grid>
            </>
          }

          {/* ===== THANKS ===== */}
          {stage === 'thanks' &&
            <>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ pb: 2, textAlign: 'center' }}>Thank You 😊</Typography>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='success' href={device == urls.source ? '/docs/diy/installation-arduino' : '/docs/diy/installation-bin'}>Installation Tutorial</Button>
              </Grid>
            </>
          }
        </Grid>
      </Box>

      {/* ===== Back Button ===== */}
      <Box sx={{ minHeight: '38px', mt: 1 }}>
        {stage !== 'start' &&
          <Button variant='outlined' onClick={back} sx={{}} disabled={stage === 'start'}>Back</Button>
        }
      </Box>
    </Box>
  )
}

export default DownloadSelector