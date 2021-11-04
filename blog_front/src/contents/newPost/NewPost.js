import axios from 'axios';
import React, {useEffect, useState} from 'react'
import '../../css/NewPost.scss';

const NewPost = ({history}) => {
    const [value, setValue] = useState({title: "", content: ""});

    const clicked = () => { //클릭하면
        if (value.title.length === 0) {
            alert("제목을 입력하세요");
            return;
        }

        //통신 후 home으로
        axios
            .post("http://localhost:8080/posting", value)
            .then(response => {
                (response.status === 200)
                    ? alert("저장되었습니다.")
                    : alert("실패하였습니다.", response.status);
            })
            .then(history.push('/'));
    }

    const titleChange = (e) => {
        setValue({title: e.target.value, content: value.content});
    }

    const contentChange = (e) => {
        setValue({title: value.title, content: e.target.value});
    }

    return (
        <div className='form-wrapper'>
            <input className='title-input' type='text' placeholder='제목을 입력하세요.'
                value={value.title} onChange={titleChange} />
            <hr className='divide-line'/>
            <textarea className='text-area' placeholder='내용을 입력하세요.'
                value={value.content} onChange={contentChange} />
            <button className='submit-button' onClick={clicked}>글쓰기</button>
        </div>
    )
}

export default NewPost