import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useGetPostsQuery} from "../api/postSlice";
import {PostCard} from "../types/posts";
import {FixedSizeList as List} from 'react-window';
import {Card} from "../ui/Card";


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  flex-direction: column;
  background-color: white;
`;

const HomeTitle = styled.h1`
  color: #74b2b2;
  font-size: 3rem;
  text-align: center;
`;



export const Home: FC = () => {
    const [pageSize, setPageSize] = useState(5);
    const [pageCount, setPageCount] = useState(1);
    const [allPosts, setAllPosts] = useState<PostCard[]>([]);
    const {data, isLoading, isFetching} = useGetPostsQuery([pageSize, pageCount]);

    const scrollHandler = (e: any) => {
        console.log(e)
        if (e.scrollOffset > (allPosts.length / 5 * 600) && !isFetching && allPosts.length > 0) {
            setPageCount((prevState) => prevState + 1);
        }
    };

    useEffect(() => {
        if (data) {
            setAllPosts((prevPosts) => [
                ...prevPosts,
                ...data
            ]);
        }
    }, [data]);

    return (
        <HomeWrapper>
            {isLoading
                ? (
                    <>Loading...</>
                )
                : <>
                    {(!data) ? (
                        <>No posts :(</>
                    ) : (
                        <>
                            <HomeTitle>Welcome</HomeTitle>
                                <List
                                    itemCount={allPosts.length}
                                    height={window.innerHeight - 150}
                                    itemSize={220}
                                    itemData={allPosts}
                                    width={window.innerWidth}
                                    onScroll={scrollHandler}
                                >
                                    {({index, style}) => (
                                        <div style={style}>
                                            <Card key={allPosts[index].id} post={allPosts[index]}/>
                                        </div>
                                    )}
                                </List>
                        </>
                    )
                    }
                </>
            }
        </HomeWrapper>
    );
};
