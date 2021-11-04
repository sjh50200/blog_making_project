import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../css/Home.scss';
import axios from 'axios';
import modifyB from "../../imgs/modify.png";
import deleteB from "../../imgs/delete.png";

const Home = ({match}) => {
    const [posts, setPosts] = useState([]); //게시물들 상태 저장

    useEffect(() => { //posts 모니터링
        axios
            .get('http://localhost:8080/postings')
            .then(({data}) => {
                if (data.length === posts.length) 
                    return;
                else 
                    setPosts(data);
            });
    }, [posts])

    const doDelete = (id) => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            axios.delete(`http://localhost:8080/posting/${id}`)
            .then(alert("삭제 되었습니다."))
            .then(() => {
                axios.get('http://localhost:8080/postings')
                .then(response => {setPosts(response.data)});
            });
        }
    };

    return (
        <div>
            <div className='post-list'>
                <div style={{height: "3vh"}}>
                    <div style={{float: "left", fontSize: "20px"}}>전체 글({posts.length})</div>
                    <Link to='/newPost'>
                        <div style={{float: "right", display:"inline-block"}}>
                            <button className="new-button">
                                새 글
                            </button>
                        </div>
                    </Link>
                </div>
                <hr style={{marginTop: '20px'}}/> 
                {
                    posts.map((post) => (
                        <div>
                        <div className='post-grid'>
                            <Link to={{ pathname: `/${post.id}`, state: { info: post } }}
                            className= "link-style">
                                <div className='post'>
                                    <h2 className='title'>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                            </Link>
                            <div className='post-tools'>
                                <div className='tool'>
                                    <Link to={{ pathname: `/modify/${post.id}`, state: { info: post }}}>
                                    <button className='modify-button'>
                                        <img src= {modifyB} style={{ width: "30px", height: "30px" }}/>
                                    </button>
                                    </Link>
                                </div>
                                <div className='tool'>
                                    <button className='delete-button' onClick={() => {doDelete(post.id)}}>
                                        <img src= {deleteB} style={{ width: "30px", height: "30px" }}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                                <hr />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home