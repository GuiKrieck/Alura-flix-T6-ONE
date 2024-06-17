import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle/GlobalStyles"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import NewVideo from "./pages/NewVideo"



function AppRoutes(){
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/newVideo" element={<NewVideo />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes