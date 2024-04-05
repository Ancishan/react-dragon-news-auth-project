import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import RightSightNav from "./Shared/RightSightNav";
import Navbar from "./Shared/Navbar";
import { useEffect, useState } from "react";


const NewsDetails = () => {
    const {id} = useParams(); //use params die routes theke data ana
    const [data, setData] = useState({})
 console.log(data)
    useEffect(() =>{
        fetch('/news.json')
        .then(res => res.json())
        .then(data => {  
            let result = data.filter(e => e._id == id)
           setData(result[0])
        } )
    },[])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-2 md:col-span-3">
                <h2>news details</h2>
                <p>{data?.details}</p>
                <h2></h2>
                </div>
                <RightSightNav></RightSightNav>
            </div>
        </div>
    );
};

export default NewsDetails;