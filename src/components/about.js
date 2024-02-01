
function About(props){
    return(
        <aside>
            <img src={props.source} placeholder={props.placeholder} alt={props.attribute}/>
            <p>{props.abtTxt}</p>
        </aside>
    )
}

export default About