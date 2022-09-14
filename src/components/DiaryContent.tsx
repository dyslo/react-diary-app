import React from 'react';
import styled from 'styled-components';
import { nowrap } from '../styles/utils/nowrap';

const DiaryContent = ({id, date, content}: any) => {
    // const returnBtnHandler = () => nav('/');

    return (
        <>
            <Styled.ContentWrapper>
                <Styled.MetaData>
                    {date}
                </Styled.MetaData>
                <Styled.Content>{content}</Styled.Content>
            </Styled.ContentWrapper>
        </>
    );
};

const Styled = {
    ContentWrapper: styled.section`
        width: 100%;
        height: 500px;
        padding-top: 20px;
    `,

    MetaData: styled.span`
        padding-left: 20px;
        font-size: ${({theme}) => theme.s1};
        font-weight: 500;
        color: ${({theme}) => theme.metadata};
        ${nowrap()};
    `,

    RemoveButton: styled.button`
        width: auto;
        height: auto;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.metadata};
    `,

    Content: styled.div`
        width: 460px;
        height: 450px;
        margin-top: 20px;
        padding: 0 20px;
        overflow-y: auto;
        line-height: 25px;
        text-align: justify;
        word-break: break-all;
        white-space: pre-wrap;
        font-size: ${({theme}) => theme.h6};
    `,
}

export default DiaryContent;