// 'use client'
import Image from "next/image"
// import { useEffect, useState } from 'react';


const BlogCard = () => {

//     const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     function handleResize() {
//       setWindowWidth(window.innerWidth);
//     }

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initialize with current width

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);


    const blogPhotos = [
        { photo: "/blog1.jpg", title: "you should travel as soon as possible", article: "Travelling to see the world while you are still young especially in your 20s" },
        { photo: "/blog2.jpg", title: "Why croatia is the best country to visit", article: "Croatia has been ranked among the world’s best countries to travel to in the Conde Nast" },
        { photo: "/blog3.jpg", title: "Here’s what to see in winter months", article: "Plitvice Lakes National Park is one of the oldest and largest National Parks that has many" }
    ]
    return (
        <div className="xl:flex flex-wrap flex-row w-full justify-around grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {blogPhotos.map((blog,index) => {
                // if(index < 2 || (index === 2 && windowWidth.innerWidth > 1024)){
                return (
                    <div key={index} className="flex flex-col justify-self-center mb-6">
                        <div className=" md:w-80 sm:w-80 w-64 md:h-64 sm:h-72 h-64 relative">
                            <Image
                             src={blog.photo}
                             alt={blog.title}
                             fill
                             style={{objectFit:"cover"}}
                            />
                    
                            {/* <img className="photo" src={blog.photo} /> */}
                        </div>

                        <div className="text-frame font-comfortea relative w-96 h-52 p-5 rounded-md bg-rent-white
                         shadow-md -mt-12 ml-7">
                            <h3 className="font-bold capitalize text-xl">{blog.title}</h3>
                            <p className="text-base text-rent-dark-grey my-4">{blog.article.substring(0,76) + '...'}</p>

                            <div className="">
                                <button className="text-base bg-rent-red text-rent-white px-1 py-0.5 rounded-md uppercase">more</button>
                            </div>
                        </div>
                    </div> 
                )
            }
            // return null}
        )}
        </div>
    )
}

export default BlogCard

