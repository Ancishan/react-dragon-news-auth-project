import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'

const LeftSIdeNav = () => {
    const[categories, setCategories]= useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-xl font-bold">All Caterogy</h2>
            {
                categories.map(category => <Link key={category.id} to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold py-4">{category.name}</Link>)
            }
            <div>
                <img src={pic1} alt="" className="rounded-lg pb-3 pt-3" />
                <h2 className="font-bold text-lg">Bayerns siams Authories over flight delay to club world cup1</h2>
                <div className="flex gap-4 pt-3">
                <p>sports</p>
                <p className=''>{moment().format(" MMMM D, YYYY ")}</p>
                </div>
            </div>
            <div>
                <img src={pic2} alt="" className="rounded-lg pb-3 pt-3" />
                <h2 className="font-bold text-lg">Bayerns siams Authories over flight delay to club world cup2</h2>
                <div className="flex gap-4 pt-3">
                <p>sports</p>
                <p className=''>{moment().format(" MMMM D, YYYY ")}</p>
                </div>
            </div>
            <div>
                <img src={pic3} alt="" className="rounded-lg pb-3 pt-3" />
                <h2 className="font-bold text-lg">Bayerns siams Authories over flight delay to club world cup3</h2>
                <div className="flex gap-4 pt-3">
                <p>sports</p>
                <p className=''>{moment().format(" MMMM D, YYYY ")}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSIdeNav;