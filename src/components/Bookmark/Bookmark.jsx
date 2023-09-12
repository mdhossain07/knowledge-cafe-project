import './Bookmark.css';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bookmark'>
            <h2 className="text-md font-medium">{bookmark.title}</h2>
        </div>
    );
};

export default Bookmark;