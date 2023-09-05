// 'use client'
import Image from "next/image"
// import { useEffect, useState } from 'react';
import Link from "next/link"


const BlogCard = ({blog}) => {

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



    return (
        <div className="flex flex-col justify-self-center mb-6">
            <div className="md:w-80 sm:w-80 w-64 md:h-64 sm:h-72 h-64 relative">
                <Image
                    src={blog.photo}
                    alt={blog.title}
                    fill
                    style={{objectFit:"cover"}}
                />
            </div>

            <div className="font-comfortea relative xl:w-96 w-96 md:w-80 xl:h-52 h-52 md:h-56 p-5 rounded-md bg-rent-white
                shadow-md -mt-12 xl:ml-7 lg:ml-0 ml-7">
                <h3 className="font-bold capitalize text-xl">{blog.title}</h3>
                <p className="text-base text-rent-dark-grey my-4">{blog.article.substring(0,76) + '...'}</p>

                <div className="">
                    <Link href={`news/${blog.id}`} className="redbtn text-base bg-rent-red text-rent-white px-1 py-0.5 rounded-md uppercase">more</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

