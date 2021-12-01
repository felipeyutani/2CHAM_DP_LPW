import { Container, Form } from './styles'
import { useState, FormEvent } from 'react'
import api from '../../services/api'
import { ListTable } from "../ListTable"

export function Dashboard() {
    const [disciplina, setDisciplina] = useState('')
    const [cargahoraria, setCargahoraria] = useState('')
    const [professor, setProfessor] = useState('')

    async function handleAddFaculdade(event: FormEvent) {
        event.preventDefault()
    
        const data = {
            disciplina,
            cargahoraria,
            professor,
        }
    
        await api.post('/faculdade', data)
    
        setDisciplina('')
        setCargahoraria('')
        setProfessor('')

        window.location.href = "/"
    }

    return (
        <Container onSubmit={handleAddFaculdade}>
            <Form>
                <label><b>Cadastro de Disciplina</b></label>
                <input 
                    placeholder="Disciplina"
                    type="text"
                    value={disciplina}
                    onChange={event => setDisciplina(event.target.value)}
                />

                <input 
                    placeholder="Carga Horária"
                    type="text"
                    value={cargahoraria}
                    onChange={event => setCargahoraria(event.target.value)}
                />

                <input 
                    placeholder="Professor"
                    type="text"
                    value={professor}
                    onChange={event => setProfessor(event.target.value)}
                />

                    <button type="submit">
                        Cadastrar
                    </button>
            </Form>

            <ListTable />
        </Container>
    )
}