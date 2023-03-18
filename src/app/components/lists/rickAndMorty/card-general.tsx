import { Card, CardContent, CardMedia } from "@mui/material";


interface Props {
    image: string,
    height: string | number,
    children: JSX.Element
}

function CardGeneral ({image, height, children}: Props) {
    return ( 
        <Card>
            <CardMedia image={ image } sx={{ height }} />
            <CardContent>{ children }</CardContent>
        </Card>
    );
}

export default CardGeneral;