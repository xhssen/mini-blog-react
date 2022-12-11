import { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import useFetch from '../useFetch';
const BlogDetail = () => {
    const {id} = useParams();
    const blog = useFetch('http://localhost:3001/blogs/' + id);
    const [pending,setPending] = useState(false);
    const navigate = useNavigate();
    const handleDelete = () => {
        setPending(true);
        fetch('http://localhost:3001/blogs/' + id,{
            method: 'DELETE',
            headers : {"Content-Type" : "application/json"},
        }).then(()=> {
            console.log("Blog Deleted!");
            setPending(false);
        })
        setTimeout(()=> {navigate('/')},1200)
    }
    return (
        <div className="blog-detail">
            { !blog && <h3 style={{textAlign:'center'}}  >Loading Blog ... </h3>}
            { blog && 
            <div className="blogsPreview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h5>{blog.body}</h5><br/>
                <p>Written By {blog.author}</p>
                {!pending && <button className="deletebtn" onClick={handleDelete}>Delete Blog</button>}
                {pending && <button className="deletebtn" onClick={handleDelete}>Deleting...</button>}
                <br/>
            </div>
            }
        </div>
    );
            }             
export default BlogDetail;