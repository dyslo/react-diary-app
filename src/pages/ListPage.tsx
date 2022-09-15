import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TitleContext } from '../context/TitleContext';
import { formatDate } from '../lib/utils';
import { nowrap } from '../styles/utils/nowrap';
import { flex } from '../styles/utils/flex';
import DiaryItem from '../components/DiaryItem';

const ListPage = () => {
    const { setTitle } = useContext(TitleContext);
    const items = { ...localStorage };

    useEffect(() => {
        const curDate = new Date();
        const dateString = curDate.getFullYear() + "년 " + (curDate.getMonth()+1) + "월 " + curDate.getDate() + "일";
        setTitle(dateString);
        if (localStorage.length === 0) {
            setTitle('No Article!');
        }
        // console.log(Object.entries(items));
        // console.log(localStorage.length);
    }, [setTitle]); 

    if (localStorage.length === 0) {
        return (
            <Styled.ContentWrapper>
                <span>
                    게시글이 없습니다.<br/>
                    게시글을 <Link to="/write"><span style={{fontWeight: 500,}}>작성</span></Link>해 보세요!
                </span>
            </Styled.ContentWrapper>
        );
    };

    return (
        <Styled.List>
            {Object.entries(items).sort((a,b) => { return Number(b[0]) - Number(a[0]) }).map(([key, value]) => {
                const {title,date} = JSON.parse(value);
                const pkey = Number(key);
                const cDate = new Date(date);
                const dateString = cDate.getFullYear() + ". " + formatDate(cDate.getMonth()+1) + ". " + formatDate(cDate.getDate());
                return <DiaryItem key={pkey} id={pkey} title={title} date={dateString} />
            })}
        </Styled.List>
    );
};

const Styled = {
    List: styled.ol`
        width: 100%;
        height: 500px;
        padding-top: 20px;
        overflow-y: auto;
        ${nowrap()};
    `,

    ContentWrapper: styled.section`
        ${flex()};
        width: 100%;
        height: 500px;
        text-align: center;
        font-size: 20px;
        line-height: 30px;
        ${nowrap()};
    `,
};

export default ListPage;