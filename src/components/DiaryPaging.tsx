import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { flex } from '../styles/utils/flex';
import { nowrap } from '../styles/utils/nowrap';

const DiaryPaging = ({id}: {id: number}) => {
    return (
        <>
            <Styled.PagingWrapper>
                <Styled.ButtonWrapper>
                    {(id-1 <= 0) ? <></> :
                        <Link to={`/detail/${id-1}`}>
                            <Styled.PagingTitleWrapper flex="flex-start">
                                <Styled.PagingSubTitle>이전 글</Styled.PagingSubTitle>
                                <Styled.PagingTitle textalign="left">{
                                    (localStorage !== null) ? JSON.parse(localStorage.getItem(String(id-1)) || '{}').title : <></>
                                    }</Styled.PagingTitle>
                            </Styled.PagingTitleWrapper>
                        </Link> }
                </Styled.ButtonWrapper>

                <Styled.ButtonWrapper>
                    {(id+1 > localStorage.length) ? <></> :
                        <Link to={`/detail/${id+1}`}>
                            <Styled.PagingTitleWrapper flex="flex-end">
                                <Styled.PagingSubTitle>다음 글</Styled.PagingSubTitle>
                                <Styled.PagingTitle textalign="right">{
                                (localStorage !== null) ? JSON.parse(localStorage.getItem(String(id+1)) || '{}').title : <></>
                                }</Styled.PagingTitle>
                            </Styled.PagingTitleWrapper>
                        </Link> }
                </Styled.ButtonWrapper>
            </Styled.PagingWrapper>
        </>
    );
};

const Styled = {
    PagingWrapper: styled.section`
        width: 500px;
        height: 100px;
        ${flex("row")};
        ${nowrap()};
    `,

    ButtonWrapper: styled.div`
        width: 250px;
        height: 100px;
        ${flex("row")};
    `,

    PagingButton: styled.button`
        width: 50px;
        height: 50px;
        border: none;
        background-color: transparent;
    `,

    PagingTitleWrapper: styled.div<any>`
        width: 150px;
        height: 50px;
        ${(props) => props.flex && `
            ${flex("column", props.flex)};
        `};
    `,

    PagingTitle: styled.h5<any>`
        width: 100%;
        font-size: ${({theme}) => theme.h6};
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        ${(props) => props.textalign && `
            text-align: ${props.textalign};
        `};
    `,

    PagingSubTitle: styled.h6`
        font-size: ${({theme}) => theme.s2};
        padding-bottom: 5px;
    `
}

export default DiaryPaging;