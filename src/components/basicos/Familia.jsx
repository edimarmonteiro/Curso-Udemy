import FamiliaMembro from "./FamiliaMenbro";

function Familia({sobrenomepai}){
    return (
        <div>
            {Array(10).fill(7)}
            <FamiliaMembro nome='Edimar' sobrenome={sobrenomepai}/>
            <FamiliaMembro nome='Kauã' sobrenome={sobrenomepai}/>
            <FamiliaMembro nome='Ruan' sobrenome='Monteiro'/>
        </div>
    )
}

export default Familia