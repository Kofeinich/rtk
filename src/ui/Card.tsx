import React, {FC} from 'react';
import styled from 'styled-components';
import {PostCard} from "../types/posts";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  flex-direction: column;
  border: 1px solid aqua;
  border-radius: 20px;
  background: coral;
  width: 300px;
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

type CardProps = {
    post: PostCard;
};

export const Card: FC<CardProps> = ({post}) => {
    return (
        <CardLtWrapper>
            <CardWrapper>
                <CardInfo>{post.id}</CardInfo>
                <CardInfo>{post.title}</CardInfo>
                <CardInfo>{post.body}</CardInfo>
            </CardWrapper>
        </CardLtWrapper>
    );
};
