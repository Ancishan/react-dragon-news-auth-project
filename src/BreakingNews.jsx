import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-300">
            <div className="btn btn-secondary">Breaking News</div>
            <Marquee pauseOnHover={true} speed={100}>
          <Link to="/"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spa</Link>
          <Link to="/"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spa</Link>
          <Link to="/"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spa</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;