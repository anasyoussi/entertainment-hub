import axios from "axios";
import { useState, useEffect } from "react";

const Trending = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => { 
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=015bed65873f4bd49b5c7ce0fe0131b3`
        ); 
        console.log(data);
        setContent(data.result) 
    }

    useEffect(() => {
        fetchTrending() ;
    }, [])

    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className='trending'>
                {
                    content && content.map((c) => {
                        console.log(c)
                    })
                }
            </div>
        </div>
    )
}

export default Trending;