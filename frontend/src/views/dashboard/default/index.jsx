import { useEffect, useState } from 'react';
// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// project imports
import ReportCard from 'components/cards/ReportCard';
import SmallFlatCard from 'components/cards/SmallFlatCard';
import TrafficSourceCard from 'components/cards/TrafficSourceCard';
import RevenuChartCard from 'components/third-party/RevenuChartCard';
import SalesLineChartCard from 'components/third-party/SalesLineChartCard';
import { GRID_SPACING } from 'config';

// data
import { reportCardData } from './data/report-card-data';
import { revenueCardData } from 'sections/dashboard/chart/card-data/revenue-card-data';
import { salesLineCardData } from './data/sales-line-chart-card-data';
import { smallFlatCardData } from './data/small-flat-card-data';
import { trafficSourceData } from './data/traffic-source-card-data';

// ==============================|| DASHBOARD DEFAULT ||============================== //

export default function Default() {
  const [facus, setFacus] = useState([]);

  const getFacultades =async () => {
    try{
      const facuResult = await fetch(
        'http://localhost:1337/api/facultades'
      );

      const faculs = await facuResult.json();
      
      const top4 = faculs.data.sort((a, b) => parseInt(b.puntos) - parseInt(a.puntos)).slice(0, 4);
      //aca use el parseint porque devuelve los puntos como strings el strapi

      setFacus(top4);
    }catch(err){
      console.log(`ERROR DESDE CONSOLA: ${err}`)
    }
  };

  useEffect(() => {
    getFacultades();
  }, []);

  /*
  Estructura anterior del reportCardData por las dudas 
      {reportCardData.map((data, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard {...data} />
        </Grid>
      ))}
  */
  return (
    <Grid container spacing={GRID_SPACING}>
      {facus.map((facu, index) => (
        <Grid key={facu.id} size ={{ xs:12, sm:6, lg:3}}>
          <ReportCard
            counter = {facu.siglas}
            title = {facu.nombre}
            color="primary.main"
            footerData = {facu.puntos}
          />
        </Grid>
      ))}
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Stack sx={{ gap: GRID_SPACING }}>
          <SalesLineChartCard {...salesLineCardData} />
          <SmallFlatCard items={smallFlatCardData} />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <RevenuChartCard {...revenueCardData} />
      </Grid>
      <Grid size={{ xs: 12, lg: 4 }}>
        <TrafficSourceCard {...trafficSourceData} />
      </Grid>
    </Grid>
  );
}
