import { Container } from './styles'
import { useState, useEffect } from 'react'
import api from '../../services/api'

interface ListFaculdade {
    id: string;
    disciplina: string;
    cargahoraria: string;
    professor: string;
}

export function ListTable() {
    const [disciplinas, setDisciplinas] = useState<ListFaculdade[]>([])

    useEffect(() => {
        api.get('/faculdade')
            .then(response => setDisciplinas(response.data))
    }, [])

    async function handleDeleteDisciplina(id: string) {
        await api.delete(`/faculdade/${id}`)
        alert('Dados excluidos com sucesso!!')
        setDisciplinas(disciplinas.filter(disc => disc.id !== id))
    }

  return (
		<Container>
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>Carga Horária</th>
                        <th>Professor</th>
                    </tr>
                </thead>
                    <tbody>
                        {disciplinas.map(disc => (
                            <tr>
                                <td>{disc.disciplina}</td>
                                <td>{disc.cargahoraria}</td>
                                <td>{disc.professor}</td>
                                <button type="button" 
                                    onClick={() => handleDeleteDisciplina(disc.id)}>Excluir
                                </button>
                            </tr>
                        ))}
                    </tbody>
		</Container>
    )
}