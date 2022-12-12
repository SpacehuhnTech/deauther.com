import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useColorMode } from '@docusaurus/theme-common'

const Select = (props) => {
    const isDarkTheme = useColorMode().colorMode === "dark"

    return (
        <Box sx={{ background: isDarkTheme ? '#333' : '#eee', borderRadius: '4px' }}>
            <Button fullWidth variant={props.selected ? 'contained' : 'text'} onClick={props.onClick} sx={{ color: isDarkTheme ? '#fff' : '#000' }}>
                <Typography variant='h3' pt={2.5} pb={1.5}>
                    {props.value}
                </Typography>
            </Button>
        </Box>
    )
}

export default Select