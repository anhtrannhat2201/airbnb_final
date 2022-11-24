import { Box, Divider, ListItem, Paper, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export default function LocationSearch() {
    const choices = [
        { id: 1, text: 'Địa Điểm Bất Kì' },
        { id: 2, text: 'Tuần Bất kì' },
        { id: 3, text: 'Thêm Khách', withIcon: true },
    ]
    return (
        <Paper sx={{
            borderRadius: 20,
            ml: 2,
            alignItems: 'center',
            fontSize: '10px',
            height: '50%'
        }}
            elevation={3}
        >
            <Stack sx={{
                borderRadius: 20,
                pl: 2,
            }}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
            >
                {
                    choices.map((choice) => {
                        return (
                            <ListItem key={choice.id}>
                                <Typography sx={{
                                    color: (theme) => theme.palette.text.primary,
                                    fontWeight: 'bold',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    width: 100,
                                }}>
                                    {choice.text}
                                </Typography>
                                {
                                    choice.withIcon && (
                                        <Box>
                                            <SearchIcon className='text-lg bg-red-500 w-40 text-white rounded-full cursor-pointer px-1' />
                                        </Box>
                                    )
                                }
                            </ListItem>
                        )
                    })
                }
            </Stack>

        </Paper>
    )
}
