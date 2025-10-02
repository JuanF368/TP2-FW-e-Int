import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button} from '@mui/material';
import MainCard from 'components/cards/MainCard';

export default function AgregarDisciplina() {
    const [nombre, setNombre] = useState('');
    const [reglamento, setReglamento] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (nombre && reglamento){
            try {
                const res = await fetch('http://localhost:1337/api/disciplinas', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: { nombre, reglamento } })
                });

                if (!res.ok){
                    throw new Error();
                }
                console.log("disciplina agregada");
                navigate('/disciplinas');
                } catch {
                console.log('Error al agregar disciplina');
                }
        } else {
            console.log('Contenido incompleto');
        }
};

return(
    <MainCard title="Nueva disciplina">
        <TextField label="Nombre" style={{ marginBottom: '16px' }} value={nombre} onChange={e => setNombre(e.target.value)} fullWidth />
        <TextField label="Reglamento" style={{ marginBottom: '16px' }} value={reglamento} onChange={e => setReglamento(e.target.value)} fullWidth multiline minRows={4} />
        <Button variant="contained" onClick={handleSubmit}>Agregar</Button>
    </MainCard>
);
}