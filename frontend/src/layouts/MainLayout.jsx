import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = ({ children }) => {

    return(
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default MainLayout;