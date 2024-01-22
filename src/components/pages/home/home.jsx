import Footer from "../../common/footer"
import Header from "../../common/header"
import Main from "./main"

const Home = () => {
    return (
        <div className="app__main-container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home