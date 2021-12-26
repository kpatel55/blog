import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Tooltip, Typography } from "@mui/material";


const screens = ["Home", "About", "Post", "Contact"];
const acountScreens = ["Profile", "Account", "Logout"]

function Nav() {
    const [anchorNav, setAnchorNav] = useState(null)
    const [anchorUser, setAnchorUser] = useState(null)

    const handleNavOpen = (event) => {
        setAnchorNav(event.currentTarget);
    }

    const handleNavClose = () => {
        setAnchorNav(null);
    }

    const handleUserOpen = (event) => {
        setAnchorUser(event.currentTarget);
    }

    const handleUserClose = () => {
        setAnchorUser(null);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu-item"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Logo
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: {xs: "flex", md: "none"} }}>
                        <IconButton
                            size="large"
                            aria-label="user account menu"
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={handleNavOpen}
                            color="inherit"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Menu
                            id="menu-bar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleNavClose}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {screens.map((screen) => (
                                <MenuItem key={screen} onClick={handleNavClose}>
                                    <Typography textAlign="center">{screen}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: "none", md: "flex"} }}>
                        {screens.map((screen) => (
                            <Button
                                key={screen}
                                onClick={handleNavClose}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {screen}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile">
                            <IconButton onClick={handleUserOpen} sx={{ p: 0 }}>
                                <Avatar />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="user-bar"
                            anchorEl={anchorUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorUser)}
                            onClose={handleUserClose}
                        >
                            {acountScreens.map((screen) => (
                                <MenuItem key={screen} onClick={handleUserClose}>
                                    <Typography textAlign="center">{screen}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav;