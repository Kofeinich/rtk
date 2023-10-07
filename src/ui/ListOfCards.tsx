import React, {FC} from 'react';
import {PostCard, PostList} from "../types/posts";
import {Card} from "./Card";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ListOfCards: FC<{ list: PostCard[] }> = ({ list }) => {
    return (
        <ListWrapper>
            {list.map((post) => <Card post={post} key={post.id}/> )}
        </ListWrapper>
    )
}



