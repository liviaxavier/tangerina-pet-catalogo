import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Chip, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";
import { MdCamera, MdFace } from "react-icons/md";

export default function ProfessionalPage({data}: DataBindInterface){
    const {professionalId} = useParams()
    let categoryId = professionalId?.split("p")[0].replace("c","")
    const category = data[Number(categoryId)]
    const professionalCode = professionalId?.split("p")[1]
    const professional = category?.data[Number(professionalCode) - 1] || {}
    const {Presencial, Online} = professional
    const tel = professional["Contato divulgação"].replace(/^(\+)|\D/g, "$1")
    if(!professional) return "loading..."
    return professional && <>
    <Search />
    <Grid sm={12} margin={"auto"} container spacing={2}>
        <Grid item sm={12} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Link
                    color="inherit"
                    to={`/category/${categoryId}`}
                >
                    {category?.id || ''}
                </Link>
                <Typography color="text.primary">{professional.Nome}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item sm={12} md={4} >
            <div className="professional__photo">
                <img src={professional.Foto} />
            </div>
        </Grid>
        <Grid item sm={12} md={8}>
            <h1>{professional.Nome}</h1>
            <p>{professional["Localização"]}</p>
            <Box component={"div"} className="professional__chips">
                {Presencial === 's' && <Chip icon={<MdFace/>} label={"presencial"} />}
                {Online === 's' && <Chip icon={<MdCamera />} label={"online"} />}
            </Box>
            <br></br>
            <a target="_blank" href={`https://wa.me/55${tel}`}>Telefone: {professional["Contato divulgação"]}</a>
        </Grid>
        <Grid item sm={12}>
            <h3>Descrição</h3>
            <p>{professional.Descricao}</p>
        </Grid>
    </Grid>
    </>
}