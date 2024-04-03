import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";


const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="font-poppins text-3xl">This is home page</h2>
        </div>
    );
};

export default HomePage;