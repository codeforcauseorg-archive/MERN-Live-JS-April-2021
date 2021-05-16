import { useParams } from "react-router-dom";


export default function Topic() {
    let param = useParams();
    let {Id} = param;
    console.log(param);
    return <h3>Requested topic ID: {Id}</h3>;
}