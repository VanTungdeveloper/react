import Header from "../layout/Header";
import Main from "../layout/Main";
import Navbar from "../layout/Navigator";

function Home() {
    return ( 
        <div style={{padding: "0 0 0 70px"}}>
            <Header />
            <Navbar />
            <Main />
        </div>
    );
}

export default Home;