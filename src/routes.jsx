import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle/GlobalStyles"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import NewVideo from "./pages/NewVideo"
import GamesProvider from "./context/Games"
import Footer from "./components/Footer"


function AppRoutes() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
                <GamesProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/NewVideo" element={<NewVideo />}></Route>
                    </Routes>
                </GamesProvider>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes