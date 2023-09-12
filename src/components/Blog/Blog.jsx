import './Blog.css'
import frame from '../../assets/images/Frame.svg'

const Blog = ({blog, handleBookmarks}) => {
    const{title, author, author_img, cover, reading_time, posted_date, hashtags} = blog;
    return (
        <div className="space-y-2">
            <img className='w-full mt-5' src={cover} alt="" />
             <div className='flex justify-between' >
                <div className="author-container flex">
                    <img src={author_img} alt="" />
                    <div className="ml-5">
                        <p className='text-sm font-medium'>{author}</p>
                        <p className='text-sm text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <div className='flex gap-2'>
                        <h3 className="text-sm text-[#11111199]">{reading_time} min read</h3>
                        <button onClick={() => handleBookmarks(title)}><img src={frame} alt="" /></button>
                        
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <div className='flex gap-5'>
                {hashtags.map((hashtag, index) => <p key = {index} className='text-sm text-[#11111199]'>#{hashtag}</p>)}
            </div>
            <p className='text-blue underline text-left text-sm'>Mark As Read</p>
           
        </div>
    );
};

export default Blog;