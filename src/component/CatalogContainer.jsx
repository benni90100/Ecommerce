import { FetchProduct } from "./FetchProduct";
import "./style/CatalogContainer.css"

export function CatalogContainer() {
    return (
        <div className="catalog-container">
            <FetchProduct/>
        </div>
    )
}