import { useEffect, useState } from 'react';
// material-ui
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// project imports
import MainCard from 'components/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  const [publicaciones, setPublicaciones] = useState([]); 
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() =>{
    const buscarPublicaciones = async () =>{
      try{
        const res = await fetch('http://localhost:1337/api/publicacions'); 
        const json = await res.json(); 
        setPublicaciones(json.data); 
      } catch(error){
        console.log("Error al obtener las publicaciones: ", error );
      }
    }; 
    buscarPublicaciones();
  }, []);


  return (
    <MainCard title="Publicaciones">
      {publicaciones.map((publi)=>{
        return (
          <div key={publi.id} style={{marginBottom:'1.5rem'}}> 
            <Typography variant='h6'>{publi.titulo}</Typography>
            <Typography variant='subtitle2' color='text.secondary'>{publi.autor} - {new Date(publi.fecha).toLocaleDateString()}</Typography>
            <Typography variant='body1' sx={{ marginTop: '0.5rem'}}>{publi.contenido}</Typography>
            <hr style={{ marginTop: '1rem', borderColor: '#ddd' }} />
          </div> 
        )
      })}
      {user && (
      <Button variant="contained" onClick={() => navigate('/agregar-publicacion')}>Agregar Publicacion</Button>
      )}
    </MainCard>
  );
}
