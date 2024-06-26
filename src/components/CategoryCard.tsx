import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CategoryInterface } from "../interfaces/Category";
import { Link } from "react-router-dom";

export default function CategoryCard({name, image, id}: CategoryInterface){
    return  <Grid item xs={12} sm={6} md={4} padding={1}>
    <Card key={id} elevation={4}>
        <Link to={`/category/${id}`}>
            <CardMedia sx={{ height: 150 }} image={image} />
            <CardContent>
                <Typography fontWeight={500} component="div" className="single_line_ellipsis">
                    {name}
                </Typography>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}