import { Link } from "react-router-dom";

export default function Home(){

    return (
        <>
            <div>home</div>
            <Link to={"/items"}>items</Link>
        </>
    )
}