import { Grid } from "@mui/material"
import AppAnimate from "@xebia/core/AppAnimate"
import ServiceCard from "./serviceCard"

const Services = () => {
    return <>
      <AppAnimate animatoin="transition.slideUpIn">
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ServiceCard />
            </Grid>

        </Grid>
        </AppAnimate>


    </>
}
export default Services