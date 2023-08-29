const BlogCard = () => {

    const blogPhotos = [
        { photo: "blog1.jpg", title: "you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s" },
        { photo: "blog2.jpg", title: "Why croatia is the best country to visit", article: "Croatia has been ranked among the world’s best countries to travel to in the Conde Nast" },
        { photo: "blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" }
    ]
    return (
        <div className="flex">
            {blogPhotos.map((blog) => {
                return (
                    <div className="parent">
                        <div className="frame">
                            <img className="photo" src={blog.photo} />
                        </div>

                        <div className="text-frame font-comfortea">
                            <h3 className="font-bold capitalize">{blog.title}</h3>
                            <p className="">{blog.article.substring(0,80) + '...'}</p>

                            <div className="border-black">
                                <button className="more uppercase">more</button>
                            </div>
                        </div>
                    </div>  
                )
            })}
        </div>
    )
}

export default BlogCard

