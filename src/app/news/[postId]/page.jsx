import data from '../../json/data.json';
import Image from 'next/image';

async function getBlog(id) {
  const res = await data.blog.find((blogItem) => blogItem.id === parseInt(id, 10));
  // if (!res) return 
  // else
   return res;
}

export default async function Post({ params }) {

  const blog = await getBlog(params.postId)

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl font-comfortea my-8'>{blog.title}</h1>
      <div className="w-full h-72 relative mb-6">
          <Image
          src={blog.photo}
          alt="blog-photo"
          fill
          style={{objectFit:"cover"}}
          />
      </div>
        <div>
          {blog.article.split('\n\n').map((paragraph, index) => (
            <p className='text-xl my-8 text-justify' key={index}>{paragraph}</p>
          ))}
        </div>
    </div>
  )
}