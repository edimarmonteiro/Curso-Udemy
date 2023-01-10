import produto from '../../data/produto';
import './TabelaProdutos.css'

export default props => {


    function TableLinhas(){
    return  produto.map((produto, id) => {
        return(
                < tr key={produto.id} className={id % 2 === 0 ? 'Par' : 'Impa'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
        )
    })

}

    return(
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID Produto </th>
                        <th>Nome Produto </th>
                        <th>Preço Produto </th>
                    </tr>
                </thead>
                <tbody>
                    
                        {TableLinhas()}
                    
                </tbody>
            </table>
        </div>
    )
}