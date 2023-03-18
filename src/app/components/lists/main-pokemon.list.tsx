import useMainRickAndMorty from "@/app/core/hooks/useMainRickAndMorty";
import { Grid, Typography } from "@mui/material";
import CardContent from "./rickAndMorty/card-content";
import CardGeneral from "./rickAndMorty/card-general";

function MainPokemon() {

    const { rick } = useMainRickAndMorty();

    return(
        <>
            <Grid container spacing={ 4 }>
            { 
                rick?.map(rick =>(
                    <Grid item xs={ 4 }>
                        <CardGeneral 
                            image={ rick.image }
                            height={ 200 }
                        >
                            <CardContent
                                namePokemon={ <Typography variant="h6">{rick.name}</Typography> }
                                species={ rick.species } 
                                status={ rick.status }
                            />
                        </CardGeneral>
                    </Grid>
                ))
            }
            </Grid>
        </>
    )
}

export default MainPokemon