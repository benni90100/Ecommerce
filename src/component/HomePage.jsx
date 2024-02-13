import { Link } from "react-router-dom"
import "./style/Homepage.css"
export function HomePage() {
    return (
        <div className="homepage">
        <div className="button-container">
            <h1>Benni Shop</h1>
            <button><Link to={"./Home"}>Entra nello shop</Link></button>
        </div>
        </div>
    )
}