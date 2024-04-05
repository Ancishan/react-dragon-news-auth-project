import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Header from "./Shared/Header";
import LeftSIdeNav from "./Shared/LeftSIdeNav";
import Navbar from "./Shared/Navbar";
import RightSightNav from "./Shared/RightSightNav";
import NewsCard from "./NewsCard";



const HomePage = () => {

    const news = useLoaderData();
    

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
                <div >
                    <LeftSIdeNav></LeftSIdeNav>
                </div>
                <div className="md:col-span-2  ">
                    <h2 className="text-xl font-bold">Dragon news Home</h2>
               {
                news.map(anew => <NewsCard key={anew._id} anew={anew}></NewsCard>)
               }
                </div>
                <div >
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default HomePage;