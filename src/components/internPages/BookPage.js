import { useParams } from "react-router"

export default function BookPage() {
    let {id} = useParams();

    //renderizar infos dessa id
    
    return (
        <p>{id}</p>
    )
}