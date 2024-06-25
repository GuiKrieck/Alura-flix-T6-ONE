import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NewVideo from "./pages/NewVideo"
import Player from "./pages/Player"
import NotFound from "./pages/NotFound"
import BasePage from "./pages/BasePage"


function AppRoutes() {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/"  element={<BasePage />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="newvideo" element={<NewVideo />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes