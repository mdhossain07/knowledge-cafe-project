import Bookmark from "../Bookmark/Bookmark";
import './Bookmarks.css';

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div>
            <div className="reading-time-container flex justify-center items-center">
                <h2 className="text-xl text-[#6047EC] font-medium">Spent Time On Read : {readTime} min</h2>
            </div>

            <div className="bookmarks-container">
                <h2 className="text-xl font-medium">Bookmarks: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}> </Bookmark> )
                }
            </div>
        </div>
        
    );
};

export default Bookmarks;