import { Link } from "react-router-dom";



const NewsCard = ({ anew }) => {
    const { title,thumbnail_url,details,_id } = anew;

    return (
        <div>
            
            <div className="card mt-4  bg-base-100 shadow-xl">
            <h2 className="card-title">{title}</h2>
                <img className="h-96" src={thumbnail_url}alt="Shoes" />
                <div className="card-body">
                    
                    {
                        details.length > 200  
                        ? <p>{details.slice(0,200)} 
                         <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link></p>
                         : <p>{details}</p>
                        
                    }

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;