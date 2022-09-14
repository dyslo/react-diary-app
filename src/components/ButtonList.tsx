import React, { useEffect, useState } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../styles/utils/flex';
import { paths } from '../Router';

import { AddSquare24Filled, ChevronCircleLeft24Filled, Delete24Filled } from '@fluentui/react-icons';

const ButtonList = () => {
    const loc = useLocation();
    const nav = useNavigate();
    const [path, setPath] = useState('');
    const pathList = paths.map((value) => value.path);

    useEffect(() => {
        setPath("/" + loc.pathname.split('/')[1]);
    }, [loc.pathname]);

    const removeHandler = () => {
        const id = loc.pathname.split('/')[2];
        localStorage.removeItem(id);
        nav('/');
    };

    return (
        <Styled.ButtonWrapper>
            {((path === '/detail' || path === '/write') || pathList.indexOf(path) === -1) ? <Styled.Button onClick={() => nav('/')}><ChevronCircleLeft24Filled /></Styled.Button> : <></>}
            {(path === '/detail') ? <Styled.Button onClick={() => removeHandler()}><Delete24Filled/></Styled.Button> : <></>}
            {(path !== '/write') ? <Styled.Button onClick={() => nav('/write')}><AddSquare24Filled/></Styled.Button> : <></> }
        </Styled.ButtonWrapper>
    );
};

const Styled = {
    ButtonWrapper: styled.div`
        ${flex()};
        position: absolute;
        top: 30px;
        right: -60px;
        width: 50px;
        height: auto;
    `,

    Button: styled.button`
        position: relative;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50px;
        background-color: ${({theme}) => theme.white};
        box-shadow: 0 2px 10px 5px rgba(0,0,0,0.1);
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    `,
}

export default ButtonList;