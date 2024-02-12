
import { FetchCatalogue } from "./FetchCatalogue";
import "./style/CatalogContainer.css"

export function HomeContainer() {
    return (
        <div className="catalog-container">
            <FetchCatalogue/>
        </div>
    )
}