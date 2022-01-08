import React from "react";
import Nav from "../navbar/Nav";
import Posts from "../posts/Posts";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


const backgroundImage = 'https://images.unsplash.com/photo-1641221638258-b771d81b6392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

function Landing() {

    return (
        <>
            <Nav />
            <Box
                sx={{
                    mt: "5px",
                    height: '80vh',
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
        </>
    )
}

export default Landing;