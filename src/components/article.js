
function Article({txt, Date, preview}){
    
    return(
        <article>
            <h3>{txt}</h3>
            <small>{Date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article