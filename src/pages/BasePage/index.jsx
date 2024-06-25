import { Outlet } from "react-router-dom"
import GlobalStyle from "../../components/GlobalStyle/GlobalStyles"
import Header from "../../components/Header"
import GamesProvider from "../../context/Games"
import Footer from "../../components/Footer"

const BasePage = () =>{
    return(
        <>
            <GlobalStyle />
            <Header />
                <GamesProvider>
                    <Outlet />
                </GamesProvider>
            <Footer />
        </>
    )
}

export default BasePage