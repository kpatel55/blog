import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <Box sx={{ m: 8, display: "flex" }}>
            <Grid container spacing={12} justifyContent="center" >
                <Grid item>
                    <Typography variant="h6" gutterBottom color="#9e9e9e">
                        Useful Links
                    </Typography>
                    <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">About</Link>
                        </Box>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">Contact</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom color="#9e9e9e">
                        Address
                    </Typography>
                    <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">
                                123 Somewhere St
                                <br />
                                City, State 00000
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom color="#9e9e9e">
                        Legal
                    </Typography>
                    <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">Terms</Link>
                        </Box>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">Privacy</Link>
                        </Box>
                        <Box component="li" sx={{ py: 0.5 }}>
                            <Link href="" color="#c9c9c9">© Your Website 2022</Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;