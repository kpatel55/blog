import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Nav from "../navbar/Nav";
import Posts from "../posts/Posts";
import Footer from "../footer/Footer";

const backgroundImage = 'https://images.unsplash.com/photo-1635349887474-77b2f0f4d8f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2386&q=80'

function Landing() {
    return (
        <>
            <Nav />
            <Box
                sx={{
                    mt: "5px",
                    height: '90vh',
                    maxHeight: "1150px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "4rem",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                }}
            >
                <Typography color="inherit" align="center" variant="h2" sx={{ borderBottom: "5px solid #fff", paddingBottom: "10px" }}>
                    Blog
                </Typography>
            </Box>
            <Posts />
            <Footer />
        </>
    )
}

export default Landing;