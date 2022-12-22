import "./Card.css";

function Card({titulo, children, color}){
    
    return(
        <div className="Card" style={{
            backgroundColor: color || '#008',
            backgroundColor: color || '#008'
        }}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {children}
            </div>
        </div>
    )
}

export default Card