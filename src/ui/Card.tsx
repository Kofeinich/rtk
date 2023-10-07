import React, {FC} from 'react';
import styled from 'styled-components';
import {PostCard} from "../types/posts";
import {Link, useParams} from "react-router-dom";


const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(199, 195, 195, 0.8);
  width: 300px;
  -webkit-box-shadow: -1px 7px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -1px 7px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -1px 7px 8px 0px rgba(34, 60, 80, 0.2);
`;

const CardLtWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


const CardInfo = styled.p`
  margin: 10px;
  font-size: 1rem;
`;

const CardInfoWrap = styled.p`
  margin: 10px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardButton = styled.button`
  width: 120px;
  background: #74b2b2;
  font-size: 1rem;
  color: aliceblue;
  border: none;
  border-radius: 20px;
`;

type CardProps = {
    post: PostCard;
};

export const Card: FC<CardProps> = ({post}) => {
    const {id} = useParams();

    return (
        <CardLtWrapper>
            <CardWrapper>
                <CardInfo>{post.id}</CardInfo>
                <CardInfo>{post.title}</CardInfo>
                {!id ? (
                    <>
                        <CardInfoWrap>{post.body}</CardInfoWrap>
                        <CardInfo>
                            <Link to={`/${post.id}`}>
                                <CardButton>Просмотр</CardButton>
                            </Link>
                        </CardInfo>
                    </>
                ) : (
                    <>
                        <CardInfo>{post.body}</CardInfo>
                        <CardInfo>
                            <Link to={`/`}>
                                <CardButton>Назад</CardButton>
                            </Link>
                        </CardInfo>
                    </>
                )}
            </CardWrapper>
        </CardLtWrapper>
    );
};
