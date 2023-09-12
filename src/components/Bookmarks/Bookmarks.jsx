import Bookmark from "../Bookmark/Bookmark";
import './Bookmarks.css';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="bookmarks-container">
            <h2 className="text-xl font-medium">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}> </Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;