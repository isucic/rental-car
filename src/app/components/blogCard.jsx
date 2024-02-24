import Image from "next/image"
import Link from "next/link"


const BlogCard = ({blog}) => {
    return (
        <>
        
        <div className="flex flex-col justify-self-center mb-6 m-0 lg:m-2 ">
        <Link href={`news/${blog.id}`}>
            <div className="md:w-80 sm:w-80 w-64 md:h-64 sm:h-72 h-64 relative overflow-hidden">
            <div className="w-full h-full transform origin-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                    src={blog.photo}
                    alt={blog.title}
                    fill
                    style={{objectFit:"cover"}}
                />
                </div>
            </div>
            </Link>

            <div 
             className="font-comfortea relative xl:w-96 w-80 md:w-80 xl:h-52 h-56 md:h-56 p-5 rounded-md bg-rent-white
                        shadow-md -mt-12 xl:ml-7 ml-0 md:ml-7
                        "
                        >
                <h3 className="font-bold capitalize text-xl">{blog.title}</h3>
                <p className="text-base text-rent-dark-grey my-4">{blog.article.substring(0,76) + '...'}</p>

                <Link href={`news/${blog.id}`}>
                    <p className="w-fit redbtn text-base bg-rent-red text-rent-white p-2 rounded-md uppercase">more</p>
                </Link>
            </div>
        </div>
      
        </>
    )
}

export default BlogCard