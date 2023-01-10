
import alunos from '../../data/alunos'

//Componente sem (Function)
export default props => {
    
    const repeticaoAluno = alunos.map((aluno) => {
        return(
            <li key={aluno.id}>
                {aluno.id} ) {aluno.nome} = {aluno.nota}
            </li>
        );
    })
    return(
        <div>
            <ul style={{ listStyle: 'none'}}>
                {repeticaoAluno}
            </ul>
        </div>
    )
}