import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import NotFoundPage from './pages/NotFoundPage';

type pathTypes = {
    path: string,
    element: JSX.Element,
}

export const paths: Array<pathTypes> = [
    {path: '/', element: <ListPage />},
    {path: '/detail/:id', element: <DetailPage />},
    {path: '/write', element: <WritePage/>}
];

const Router = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Routes>
                        {/* <Route path="/" element={<List />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="/write" element={<WritePage />} />
                        <Route path="*" element={<NotFoundPage/>}/> */}
                        {paths.map(({path, element}) => {
                            return <Route key={path} path={path} element={element} />
                        })}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Router;