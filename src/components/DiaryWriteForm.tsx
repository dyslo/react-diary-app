import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../lib/utils';

const DiaryWriteForm = () => {
    const [id, setId] = useState('');
    const [dTitle, setdTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        const today = new Date();
        const dateFormat = today.getFullYear() + "-" + formatDate(today.getMonth()+1) + "-" + formatDate(today.getDate());
        setDate(dateFormat);
        setId(String(today.getTime()));
    }, []);

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => setdTitle(e.target.value);
    const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (dTitle === '' || content === '') { alert('내용을 확인해 주세요.'); return; }
        const data = JSON.stringify({title: dTitle, content: content, date: date});
        window.localStorage.setItem(String(id), data);
        nav(`/detail/${id}`);
    }

    return (
        <Styled.WriteContainer>
            <Styled.DiaryForm onSubmit={(e) => submitHandler(e)}>
                <Styled.TitleInput placeholder="제목을 입력해 주세요." onChange={(e) => titleHandler(e)}/>
                <Styled.ContentInput onChange={(e) => contentHandler(e)}/>
                <Styled.SubmitButton>작성</Styled.SubmitButton>
            </Styled.DiaryForm>
        </Styled.WriteContainer>
    );
};

const Styled = {
    WriteContainer: styled.section`
        width: 480px;
        height: 500px;
        padding-top: 20px;
        padding-left: 20px;
    `,

    DiaryForm: styled.form`
        width: 100%;
        height: 100%;
    `,

    TitleInput: styled.input`
        width: 440px;
        height: 25px;
        margin-bottom: 10px;
        padding: 5px 10px;
        outline: none;
        border-radius: 0;
        border: .03rem solid #ccc;
        font-size: ${({theme}) => theme.s1};
    `,

    ContentInput: styled.textarea`
        width: 440px;
        height: 480px;
        padding: 10px;
        outline: none;
        border-radius: 0;
        border: .03rem solid #ccc;
        resize: none;
        font-size: ${({theme}) => theme.h6};
    `,

    SubmitButton: styled.button`
        display: block;
        width: 70px;
        height: 30px;
        margin: 0 auto;
        border-radius: 10px;
        border: 1px solid #ccc;
    `
};

export default DiaryWriteForm;