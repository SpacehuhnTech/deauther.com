import React, { useState } from 'react'
import Grid from '@mui/material/Grid'

import Select from './Select'

const SelectGroup = (props) => {
    const [selected, setSelected] = React.useState(-1)

    return (
        <Grid container spacing={1}>
            {props.values.map(value =>
                <Grid item key={value} xs={4}>
                    <Select value={value} selected={(value == props.value)} onClick={() => props.changeValue(value)} />
                </Grid>
            )}
        </Grid>
    )
}

export default SelectGroup