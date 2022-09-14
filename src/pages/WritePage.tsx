import React, { useContext, useEffect } from 'react';
import DiaryWriteForm from '../components/DiaryWriteForm';
import { TitleContext } from '../context/TitleContext';

const WritePage = () => {
    const { setTitle } = useContext(TitleContext);
    
    useEffect(() => {
        setTitle('일기 작성');
    });
    return (
        <DiaryWriteForm />
    );
};

export default WritePage;