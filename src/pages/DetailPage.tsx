import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TitleContext } from '../context/TitleContext';
import DiaryContent from '../components/DiaryContent';
import DiaryPaging  from '../components/DiaryPaging';
import styled from 'styled-components';

export type dataType = {
    title: string,
    content: string,
    date: string,
};

const DetailPage = () => {
    const params = useParams();
    const nav = useNavigate();
    const [data, setData] = useState<dataType>({title: '', content: '', date: ''});
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);
    
    const { setTitle } = useContext(TitleContext);
    // const dsaf: dataType|null = JSON.parse(String(localStorage.getItem(String(params.id))));

    useEffect(() => {
        // const fetchData = diaryData.filter(el => el.id === Number(params.id));
        // const contentDate = () => {
        //     const temp = new Date(fetchData[0].date);
        //     return `${temp.getFullYear()}년 ${temp.getMonth()+1}월 ${temp.getDate()}일에 작성됨`
        // }
        // const parseData: Object = JSON.parse(localStorage.getItem(String(params.id)));
        // if (typeof(parseData) !== 'null') {

        // }
        // setData(JSON.parse(localStorage.getItem(params.id)))
        // const contentDate = () => {
        //     const temp = new Date(data.date);
        // }
        // setDate(contentDate);
        // setTitle(fetchData[0].title);
        const parsedData: dataType = JSON.parse(String(localStorage.getItem(String(params.id)))) || {title: '', content: '', date: ''};
        setData(parsedData);

        const createdDate = () => {
            const temp = new Date(data.date);
            return `${temp.getFullYear()}년 ${temp.getMonth()+1}월 ${temp.getDate()}일에 작성됨`;
        };

        setDate(createdDate);
        setTitle(data.title);
        setLoading(false);
    }, [params.id, setTitle, data.title, data.date]);

    if (loading) return <></>;
    return (
        <>
            {(data.title === '') ? nav('/404') : <DiaryContent id={params.id} date={date} content={data.content} /> }
            {/* <DiaryPaging id={Number(params.id)} /> */}
            <Styled.Divider />
            <DiaryPaging id={params.id || '0'} />
            
        </>
        
    );
};

const Styled = {
    Divider: styled.hr`
        outline: none;
        border: 1px solid rgba(0,0,0,0.1);
        margin: 0 20px;
    `,
}

export default DetailPage;