import BreakingNews from "../BreakingNews";
import Header from "./Shared/Header";
import LeftSIdeNav from "./Shared/LeftSIdeNav";
import Navbar from "./Shared/Navbar";
import RightSightNav from "./Shared/RightSightNav";


const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="border">
                    <LeftSIdeNav></LeftSIdeNav>
                </div>
                <div className="md:col-span-2 border">
                Dragon News Home
                </div>
                <div className="border">
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default HomePage;