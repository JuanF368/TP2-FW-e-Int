import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button} from '@mui/material';
import MainCard from 'components/cards/MainCard';

export default function AgregarPublicacion() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [autor, setAutor ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')); 
    
    if (titulo && contenido){
        try {
            const fecha = new Date().toISOString().split('T')[0]; 
            const res = await fetch('http://localhost:1337/api/publicacions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ data: { titulo , contenido, autor, fecha: fecha} })
            });

            if (!res.ok){
                throw new Error();
            }
            alert('Publicacion agregada');
            navigate('/sample-page');
            } catch(error) {
            alert('Error al agregar publicacion', error);
            }
    } else {
        alert('Contenido icompleto');
    }
    
  };

  return (
    <MainCard title="Nueva publicacion">
        <TextField label="Título" style={{ marginBottom: '16px' }} value={titulo} onChange={e => setTitulo(e.target.value)} fullWidth />
        <TextField label="Autor" style={{ marginBottom: '16px '}} value={autor} onChange={e=> setAutor(e.target.value)} fullWidth />
        <TextField label="Contenido" style={{ marginBottom: '16px' }} value={contenido} onChange={e => setContenido(e.target.value)} fullWidth multiline minRows={4} />
        <Button variant="contained" onClick={handleSubmit}>Publicar</Button>
    </MainCard>
  );
}

