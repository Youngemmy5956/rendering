import React, {useState, useEffect} from 'react'
import axios from "axios";

function Axios() {
    const [post, setPost] = useState([]);

     // get method
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
        

        <table>
            <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
            </tr>


            <tr>
                <td></td>
            </tr>

            <tr>
                <td></td>
            </tr>

            <tr>
                <td></td>
            </tr>
        </table>
        
        
    </div>
  )
}

export default Axios