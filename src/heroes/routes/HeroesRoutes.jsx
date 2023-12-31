import {Navbar} from "../../ui";
import {Navigate, Route, Routes} from "react-router-dom";
import {DCPage, HeroPage, MarvelPage, SearchPage} from "../pages/index.js";


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <MarvelPage />} />
                    <Route path="dc" element={ <DCPage />}  />
                    <Route path="search" element={ <SearchPage />}  />
                    <Route path="hero/:heroId" element={ <HeroPage />}  />
                    <Route path="/" element={ <Navigate to="/marvel" />}  />
                </Routes>
            </div>
        </>
    )
}