import data from '../../json/data.json';
import {notFound} from "next/navigation"

const posts = data.blog

export default async function Post({ params }) {

  const { postId } = params
  const post = data.blog[0]

  if (!post) {
    return <p>nije nadeno</p>
  }

  return (
    <div>page</div>
  )



}