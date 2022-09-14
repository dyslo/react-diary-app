import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { flex } from './styles/utils/flex';
import { nowrap } from './styles/utils/nowrap';
// import { createContext } from 'react';
import { TitleContext } from './context/TitleContext';
import ButtonList from './components/ButtonList';

// icon


const Layout = (props: any) => {
    const { children } = props;
    const [title, setTitle] = useState<string | null>(null);
    // const [date, setDate] = useState("");
    // const TitleContext = createContext(date);
    // const [title, setTitle] = useContext(TitleContext);

    return (
        <Styled.Wrapper>
            <Styled.Box>
                <ButtonList />
                <TitleContext.Provider value={{title, setTitle}}>
                    <Styled.Title>
                        <TitleContext.Consumer>{({title}) => title}</TitleContext.Consumer>
                    </Styled.Title>
                    <Styled.Divider />
                    {children}
                </TitleContext.Provider>
            </Styled.Box>
        </Styled.Wrapper>
    );
};


const Styled = {
    Wrapper: styled.div`
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        ${flex()};
    `,

    Box: styled.div`
        position: relative;
        width: 500px;
        height: 700px;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.white};
        box-shadow: 0 5px 17px 0px rgba(0,0,0,0.1);
    `,

    Title: styled.h1`
        font-size: ${({ theme }) => theme.h4};
        font-weight: 600;
        text-align: center;
        width: 100%;
        padding: 20px 0;
        ${nowrap()};
    `,

    Divider: styled.hr`
        outline: none;
        border: 1px solid rgba(0,0,0,0.1);
        margin: 0 20px;
    `,
}

export default Layout;