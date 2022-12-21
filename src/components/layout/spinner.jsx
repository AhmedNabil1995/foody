import React from 'react'
import { CircularProgress, Stack } from '@mui/material'


export default function spinner() {
    return (
        <div style={{ hight: "200px" }}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction='row'>
                <CircularProgress color='inherit' />
            </Stack>
        </div>
    )
}
