
import Article from "./article"

function ArticleList (props){
    //const array = blogData
    const date = '1 January 1970'
    const arrElement = props.array.map((arr)=>{
        return <li key={arr}>{arr}</li>
    })
    return(
        <main>
            {arrElement}
            <Article txt="Moringa"  Date={Date.now()} date ={date} preview ="This is just a mere blog post"/> 
            
        </main>
    )
}
export default ArticleList