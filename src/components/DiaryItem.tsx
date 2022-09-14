import React from 'react';
import styled from 'styled-components';
import { flex } from '../styles/utils/flex';
import { Link } from 'react-router-dom';

type DiaryProps = {
    key: number;
    id: number;
    title: string;
    date: string;
};

const DiaryItem = ({ id, title, date }: DiaryProps) => {
    return (
        <Styled.Wrapper>
            <Link to={`/detail/${id}`}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Date>{date}</Styled.Date>
            </Link>
        </Styled.Wrapper>
    );
};

const Styled = {
    Wrapper: styled.li`
        width: 100%;
        height: 40px;
        ${flex("row", "center", "space-between")};
        transition: .1s background-color ease;
        &:hover {
            background-color: #dddddd;
            cursor: pointer;
            z-index:1;
        }
    `,

    Title: styled.span`
        display: inline-block;
        width: 350px;
        text-align: center;
        line-height: 40px;
        font-size: ${({ theme }) => theme.h6};
    `,

    Date: styled.span`
        display: inline-block;
        width: 150px;
        text-align: center;
        line-height: 40px;
        font-size: ${({ theme }) => theme.s1};
    `,
}

export default DiaryItem;