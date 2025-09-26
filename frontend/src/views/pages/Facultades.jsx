import { useEffect, useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import MainCard from 'components/cards/MainCard';

export default function Facultades() {
    const [facultades, setFacultades] = useState([]);

    const getFacultades = async () => {
        try{
            const res = await fetch(
                'http://localhost:1337/api/facultades'
            );
            const facus = await res.json();
            setFacultades(facus.data);
        }catch(err){
            console.log(`ERROR DESDE CONSOLA: ${err}`)
        }
    };

    useEffect(() => {
        getFacultades();
    }, []);

    const handlePuntosChange = (id, nuevoValor) => {
        setFacultades(prev => 
            prev.map(facu =>
                facu.documentId === id
                ? {...facu, puntos: nuevoValor}
                : facu
            )
        );
    };

    const handleGuardar = async (id, puntos) => {
        try{
            const res = await fetch(`http://localhost:1337/api/facultades/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    data: {puntos: parseInt(puntos)}
                })
            });

            if (!res.ok){
                throw new Error('Error al actualizar puntos');
            }
        }catch(err){
            console.log(`ERROR Al actualizar puntos: ${err}`);
        }
    };
    
    return (
        <MainCard title="Facultades">
            {facultades.map((facu) => {
                return (
                    <div key={facu.id} style={{marginBottom:'1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <Typography variant='h6'>{facu.nombre} ({facu.siglas})</Typography>
                            <Typography variant='body2'>Puntos:</Typography>
                            <TextField
                                label="..."
                                type='number'
                                value={facu.puntos}
                                onChange={e => handlePuntosChange(facu.documentId, e.target.value)}
                            />
                        </div>
                        <Button
                            variant="contained"
                            onClick={() => handleGuardar(facu.documentId, facu.puntos)}
                        >
                            Guardar
                        </Button>
                    </div>
                )
            })}
        </MainCard>
    );
}