import { Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface Props {
    namePokemon: JSX.Element,
    species: string,
    status: string,

}

function CardContent({ namePokemon, species, status }: Props) {
  return (
    <>
      {namePokemon}
      <Stack direction="row" justifyContent="space-between">
        <Typography>{species}</Typography>
        <Chip label={status} color={status === "Alive" ? "success" : "error"} />
      </Stack>
    </>
  );
}

export default CardContent;
