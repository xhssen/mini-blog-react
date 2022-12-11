
import {useEffect,useState} from 'react';

const useFetch = (url) => {
    
    const [blogs,setBlogs] = useState(null);
    useEffect(()=> {
        fetch(url).then(res => {
          if (!res.ok) throw Error('Problem Fetching Data!');
          return res.json();
        }).then(posts => {
          setBlogs(posts);
        }).catch (err => {
          alert(err.message);
        })
       
      },[url]);
      return blogs;
}

export default useFetch;