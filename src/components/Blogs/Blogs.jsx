import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBLogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBLogs(data));
    }, [])


    return (
        <div className="w-2/3 mt-10">
            <div>
                {blogs.map(blog => 
                <Blog 
                    key= {blog.id} 
                    blog = {blog}
                    handleBookmarks = {handleBookmarks}> 
                </Blog>)}
            </div>
        </div>
    );
};

export default Blogs;