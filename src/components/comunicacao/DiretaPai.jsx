import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Edimar" idade={18} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Fabiano' idade={19} nerde={false}/>
        </div>
    )
}