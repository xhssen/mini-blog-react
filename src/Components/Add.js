import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [pending,setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setPending(true);
        fetch('http://localhost:3001/blogs/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=> {
            setPending(false);
            console.log("Blog Added!");
        })
        setTimeout(() => { navigate('/')}, 1200);
       
    }
    return (
        <div className="add-blog">
            <h1 style={{textAlign:'center'}} >Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label><br/>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} minlength="10" maxlength="70"/><br/>
                <label>Content :</label><br/>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required minlength="30"></textarea><br/>
                <label>Author</label><br/>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} type='text' minlength="5" maxlength="25"/><br/>
                {!pending && <button className="add-btn">Add</button>}
                {pending && <button disabled className="add-btn">Adding...</button>}
               
            </form>
        </div>
    );
}
export default Add;