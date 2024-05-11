import { formattedDate } from '../../utils/function';
import { Blog } from '../../utils/types'
import useFetchBlog from '../hooks/useFetchBlog';

export default function BlogPage() {

  const { error, blogData } = useFetchBlog();

  return (
    <div>
      <h1 className="text-center text-[10rem] border-t border-b border-gray-500">
        THE BLOG
      </h1>
      <div>
        {error && <p>{error}</p>}
        <div className="grid grid-cols-3">
          {blogData && blogData.map((blog: Blog) => (
            <div key={blog.id} >
              <h2>
                {blog.title}
              </h2>
              <p>
                {blog.description}
              </p>
              <p>
                {formattedDate(blog.created_at)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}






















// ganito kapag hindi naka redux, gagamit ng props
// import { Session } from "@supabase/supabase-js";

// // ganito mag extract sa props ng types kapag nested yung data
// export default function BlogPage({ authenticated }: { authenticated: Session }) {

//     // console.log(user.user.email)
//     return (
//         <div>
//             {authenticated.user.email}
//         </div>
//     )
// }


