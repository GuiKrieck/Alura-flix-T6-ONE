import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle/GlobalStyles"
import HomePage from "./pages/HomePage"


function AppRoutes(){
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes