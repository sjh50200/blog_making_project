import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ModifyPost({location, history}) {
    const [value, setValue] = useState({id: "", title: "", content: ""});

    useEffect(() => { //컴포 생성 시 넘어온 값들 저장
        setValue(() => ({
            id: location.state.info.id,
            title: location.state.info.title,
            content: location.state.info.content,
        }))
    }, [])

    const titleChange = (e) => {
        setValue({id: value.id, title: e.target.value, content: value.content});
    }

    const contentChange = (e) => {
        setValue({id: value.id, title: value.title, content: e.target.value});
    }

    const doModify = () => { //수정 put 메소드로 통신
        if(window.confirm("수정하시겠습니까?")) {
            axios.put('http://localhost:8080/posting', value)
            .then(alert('수정 되었습니다.'))
            .then(history.push('/'));
        }
    }

    return (
        <div className='form-wrapper'>
            {/* 제목 입력 */}
            <input className='title-input' type='text' value={value.title}
                onChange={titleChange} />
            <hr className='divide-line'/>
            {/* 내용 입력 */}
            <textarea className='text-area' value={value.content} onChange={contentChange} />
            <button className='submit-button' onClick={doModify}>수정하기</button>
        </div>
    )
}

export default ModifyPost
