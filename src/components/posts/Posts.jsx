import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import _ from 'lodash';
import postCards from "../../data/posts.json";


function Posts() {
    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                bgcolor: "#fff5f8",
                height: "400px",
                pt: "64px",
                pb: "200px"
            }}
        >
            {_.map(postCards, post =>
                <Card key={post.id} sx={{ maxWidth: 345, mb: "24px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={post.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </Box>
    )
}

export default Posts;