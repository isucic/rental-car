const BlogCard = () => {

    const blogPhotos = [
        { photo: "blog1.jpg", title: "10 reasons why you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s..." },
        { photo: "blog2.jpg", title: "10 reasons why you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s..." },
        { photo: "blog3.jpg", title: "10 reasons why you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s..." }
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
                            <h3 className="font-bold">{blog.title}</h3>
                            <p className="">{blog.article}</p>

                            <button className="more uppercase">more</button>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default BlogCard

