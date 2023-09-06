import BlogCard from "../components/blogCard";
import data from '../json/data.json';

const News = () => {

    const blogPosts = data.blog;
    return (
        <>
        {/* <h1 className="capitalize font-comfortea mt-10 text-3xl">recent articles</h1>
        <div className='border-t border-rent-black my-6'></div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            {blogPosts.map((blog,index) => {
                return (
                    <BlogCard key={`${blog.id}`} blog={blog}/>
                )
            })}
            
        </div>
        </>
    )
}

export default News;