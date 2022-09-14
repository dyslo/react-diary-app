import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TitleContext } from '../context/TitleContext';
import { flex } from '../styles/utils/flex';
import { nowrap } from '../styles/utils/nowrap';

const NotFoundPage = () => {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle("Oopsy!");
    })
    return (
        <Styled.Wrapper>
            <Styled.Icon>😅</Styled.Icon>
            <Styled.Information>404 Not Found</Styled.Information>
            <Styled.Information2>페이지를 찾을 수 없습니다.</Styled.Information2>
        </Styled.Wrapper>
    );
};

const Styled= {
    Wrapper: styled.section`
        ${flex()};
        width: 100%;
        height: 600px;
        text-align: center;
    `,

    Icon: styled.h1`
        font-size: ${({theme}) => theme.h1};
        margin-bottom: 20px;
        ${nowrap()};
    `,

    Information: styled.h4`
        font-size: ${({theme}) => theme.h4};
        font-weight: 700;
        margin-bottom: 10px;
        ${nowrap()};
    `,

    Information2: styled.h6`
        font-size: ${({theme}) => theme.h6};
        font-weight: 500;
        ${nowrap()};
    `
}

export default NotFoundPage;