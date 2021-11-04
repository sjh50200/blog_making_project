import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/Detail.scss";
import buttonImg from "../imgs/comment_delete.png";

function Detail({ location }) {
    const [value, setValue] = useState({page: "", name: "", comment: ""});
    const [comments, setComments] = useState([]);

    useEffect(() => { //page state값을 담아줌
        setValue(() => ({
            page: location.state.info.id
        }))
    }, [])

    useEffect(() => { //서버와의 통신으로 comment 가져옴
        axios.get("http://localhost:8080/comments")
        .then(({data}) => {
            if(data.length === comments.length)
                return;
            else setComments(data);
        })
    }, [comments]) //comment 변경 시 re-render

    const nameChange = (e) => {
        setValue({page: value.page, name: e.target.value, comment: value.content});
    }

    const commentChange = (e) => {
        setValue({page: value.page, name: value.name, comment: e.target.value});
    }

    const saveComment = () => { //저장 후 value 초기화
        if(window.confirm("댓글을 등록하시겠습니까?")) {
            if(value.name.length !== 0) {
                axios.post("http://localhost:8080/comment", value)
                .then(alert("등록이 완료되었습니다."))
                .then(({data}) => {setComments(data);});
            }
            else alert("이름을 입력하세요.");
        }
        let newValue = {...value};
        newValue.name = ""; newValue.comment = "";
        setValue(newValue);
    }

    const deleteComment = (element) => {
        if(window.confirm("댓글을 삭제하시겠습니까?")) {
            axios.delete(`http://localhost:8080/comment/${element.id}`)
            .then(alert("삭제되었습니다."))
            .then(({data}) => {setComments(data);});
        }
    }

    const countComment = (page) => {
        let count = 0;
        comments.forEach(v => {
            if(v.page === page)
                count++;
        })
        return count;
    }

    return (
        <div className="post-detail">
            {/* 본문 */}
            <h1>{location.state.info.title}</h1>
            <hr />
            <p style={{marginTop: "3%", paddingBottom: "3%"}}>{location.state.info.content}</p>
            {/* 댓글 부분 */}
            <div style= {{marginTop: "7%"}}><strong>전체 댓글({countComment(value.page)})</strong></div>
            <hr className= "comment-divide-line"/>
            <table className="comment-table">
            {
                comments.map(element => {
                    if(element.page === value.page) {
                        return (
                            <tr className="comment-tr">
                                <td>{element.name}</td>
                                <td>{element.comment}<button style={{float: "right"}} onClick= {() => {deleteComment(element)}}>
                                    <img src={buttonImg}/></button>
                                </td>
                            </tr>
                        );
                    }
                })
            }
            </table>
            {/* 댓글 작성 부분 */}
            <div className="comment-grid">
                <div className="temp">
                    <input className= "name-area" placeholder= "이름"
                    value={value.name} onChange={nameChange}/>
                </div>
                <div className= "temp">
                    <textarea className= "comment-area" placeholder= "내용을 입력하세요."
                    calue={value.comment} onChange={commentChange}/>
                </div>
                <button className= "comment-button" onClick={saveComment}>쓰기</button>
            </div>
        </div>
    )
}

export default Detail