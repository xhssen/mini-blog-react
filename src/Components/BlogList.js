import {Link} from 'react-router-dom';
const BlogList = ({data,deleteblog}) => {   
    
    return (
        <div className="blogList" >
            
            {data.map((blog) => (
                <div className="blogsPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h5>{blog.body.slice(0,65)}...</h5>
                    <p>Written By {blog.author}</p>
                    <br/>
                    <Link to={`/blogs/${blog.id}`}>
                    <button className='read-btn'>Read Blog</button>
                    </Link>
                   
                </div>
              
            ))}
        </div>
    );
}

export default BlogList;