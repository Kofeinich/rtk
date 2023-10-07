import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import {LayoutTitle, LayoutWrapper} from "../styles/layout";
import {Card} from "../ui/Card";
import {useGetPostByIdQuery} from "../api/postSlice";


export const Detail: FC = () => {
    const { id } = useParams();
    const {data} = useGetPostByIdQuery(Number(id));

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <LayoutWrapper>
            <LayoutTitle>Welcome</LayoutTitle>
            <Card post={data}></Card>
        </LayoutWrapper>
    );
};

