import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { flex } from '../styles/utils/flex';
import { nowrap } from '../styles/utils/nowrap';

const getItemsId = () => {
    let tempList: Array<String> = [];
    Object.entries({...localStorage}).map((value) => {
        tempList.push(value[0]);
    });

    tempList.sort((a,b) => { return Number(a) - Number(b)});
    return tempList;
};


const DiaryPaging = ({id}: {id: string}) => {
    // const items = Object.entries({...localStorage}).map((value) => value });
    const [idList, setIdList] = useState<Array<String>>(getItemsId());
    const [idx, setIdx] = useState<number>(idList.indexOf(id));

    const parseData = (id: any) => {
        const getData = JSON.parse(localStorage.getItem(id) || '');
        return getData;
    }

    useEffect(() => {
        setIdList(getItemsId());
        setIdx(idList.indexOf(id));
    }, [setIdList, setIdx, id, idList.indexOf(id)]);

    return (
        <>
            <Styled.PagingWrapper>
                <Styled.ButtonWrapper>
                    {((idx-1) < 0) ? <></> : 
                    <Link to={`/detail/${idList[idx-1]}`}>
                        <Styled.PagingTitleWrapper flex="flex-start">
                            <Styled.PagingSubTitle>이전 글</Styled.PagingSubTitle>
                            <Styled.PagingTitle textalign="left">{parseData(idList[idx-1]).title}</Styled.PagingTitle>
                        </Styled.PagingTitleWrapper>
                    </Link> }
                </Styled.ButtonWrapper>
                <Styled.ButtonWrapper>
                    {((idx+1) >= localStorage.length) ? <></> :
                    <Link to={`/detail/${idList[idx+1]}`}>
                        <Styled.PagingTitleWrapper flex="flex-end">
                            <Styled.PagingSubTitle>다음 글</Styled.PagingSubTitle>
                            <Styled.PagingTitle textalign="right">{parseData(idList[idx+1]).title}</Styled.PagingTitle>
                        </Styled.PagingTitleWrapper>
                    </Link>}
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