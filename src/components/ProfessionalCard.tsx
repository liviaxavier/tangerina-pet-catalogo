import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { ProfessionalInterface } from "../interfaces/Professional";
import { MdCamera, MdFace } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProfessionalCard({item, category}: any){
    const {Nome, Foto, id, Presencial, Online } = item

    return  <Grid item xs={12} sm={6} md={4} >
    <Card key={id} elevation={2} >
        <Link to={`/professional/c${category.id}p${id}`} style={{display: 'flex', justifyContent: 'start'}}>
            <Box className="professional__image" padding={1}>
                <img src={Foto} />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {Nome}
                </Typography>
                <Typography variant="body1" component="div">
                    {item["Localização"]}
                </Typography>
                <Box component={"div"} className="professional__chips">
                    {Presencial === 's' && <Chip icon={<MdFace/>} label={"presencial"} />}
                    {Online === 's' && <Chip icon={<MdCamera />} label={"online"} />}
                </Box>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}