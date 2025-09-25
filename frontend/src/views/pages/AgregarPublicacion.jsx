import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button} from '@mui/material';
import MainCard from 'components/cards/MainCard';

export default function AgregarPublicacion() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (titulo && contenido){
        try {
            const res = await fetch('http://localhost:1337/api/publicacions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { titulo, autor: 'Autor demo', contenido } })
            });

            if (!res.ok){
                throw new Error();
            }
            alert('Publicacion agregada');
            navigate('/sample-page');
            } catch {
            alert('Error al agregar publicacion');
            }
    } else {
        alert('Contenido icompleto');
    }
    
  };

  return (
    <MainCard title="Nueva publicacion">
        <TextField label="Título" style={{ marginBottom: '16px' }} value={titulo} onChange={e => setTitulo(e.target.value)} fullWidth />
        <TextField label="Contenido" style={{ marginBottom: '16px' }} value={contenido} onChange={e => setContenido(e.target.value)} fullWidth multiline minRows={4} />
        <Button variant="contained" onClick={handleSubmit}>Publicar</Button>
    </MainCard>
  );
}

