import axios from "axios";
import { useEffect, useState } from "react";
import '../../SingleContent/SingleContent';
import SingleContent from "../../SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../../Pagination/CustomPagination";
const Trending = () => {

  const[page,setPage]=useState(1);
  const [content, setContent] = useState([]);

 
  

  async function fetchTrending() {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    
    //console.log(data.results);
    setContent(data.results);
  }
  useEffect(() => {
    window.scroll(0,0);
    fetchTrending();
    // eslint-disable-next-line
  },[page]);

  
  return (
    <div>
      <span className="pageTitle">Trending Today</span>
     <div className="trending">
       {
        content && content.map((c)=>
          <SingleContent key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
        )
        
       }

     </div>
     <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending;
