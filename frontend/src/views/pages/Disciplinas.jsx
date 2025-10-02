import { useEffect, useState } from 'react';
import MainCard from 'components/cards/MainCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Disciplinas() {
    const [disciplinas, setDisciplinas] = useState([]);
    const [activa, setActiva] = useState(null);
    const navigate = useNavigate();

    const getDisciplinas = async () => {
        try {
            const response = await fetch('http://localhost:1337/api/disciplinas');
            const data = await response.json();
            setDisciplinas(data.data);
        } catch (error) {
            console.error('Error fetching disciplinas:', error);
        }
    };

    useEffect(() => {
        getDisciplinas();
    }, []);

    const handleClick = (id) => {
        setActiva(id === activa ? null : id);
    };

    return(
        <MainCard title="Disciplinas">
            <ul>
                {disciplinas.map((disciplina) => (
                    <li key={disciplina.id} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                        <a 
                            onClick={() => handleClick(disciplina.id)}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <h2>{disciplina.nombre}</h2>
                        </a>
                        {activa === disciplina.id && (
                            <div style={{ marginTop: '5px', paddingLeft: '15px' }}>
                                <strong>Reglamento:</strong>
                                <p>{disciplina.reglamento}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <Button variant="contained" onClick={() => navigate('/agregar-disciplina')}>Nueva Disciplina</Button>
        </MainCard>
    )

}