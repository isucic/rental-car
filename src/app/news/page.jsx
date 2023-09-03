import BlogCard from "../components/blogCard";
import data from '../json/data.json';

const News = () => {

    const blogPosts = data.blog;
    // const blogPosts = [
    //     { photo: "/blog1.jpg", title: "you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s" },
    //     { photo: "/blog2.jpg", title: "Why croatia is the best country to visit", article: "Croatia has been ranked among the world’s best countries to travel to in the Conde Nast" },
    //     { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" },
    //     { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" },
    //     { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" },
    //     { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" },
    //     { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" },
    //   ]
    return (
        <>
        <h1 className="capitalize font-comfortea mt-10 text-3xl">recent articles</h1>
        <div className='border-t border-rent-black my-6'></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            {blogPosts.map((blog,index) => {
                return (
                    <BlogCard key={index} blog={blog}/>
                )
            })}
            
        </div>
        </>
    )
}

export default News;