import React, {FC, useEffect, useState} from 'react';
import {useGetPostsQuery} from "../api/postSlice";
import {PostCard} from "../types/posts";
import {FixedSizeList as List} from 'react-window';
import {Card} from "../ui/Card";
import {LayoutTitle, LayoutWrapper} from "../styles/layout";


export const Home: FC = () => {
    const [pageSize, setPageSize] = useState(5);
    const [pageCount, setPageCount] = useState(1);
    const [allPosts, setAllPosts] = useState<PostCard[]>([]);
    const {data, isLoading, isFetching} = useGetPostsQuery([pageSize, pageCount]);

    const scrollHandler = (e: any) => {
        if (e.scrollOffset > (allPosts.length * 220 - 820) && !isFetching && allPosts.length > 0) {
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
        <LayoutWrapper>
            {isLoading
                ? (
                    <>Loading...</>
                )
                : <>
                    {(!data) ? (
                        <>No posts :(</>
                    ) : (
                        <>
                            <LayoutTitle>Welcome</LayoutTitle>
                            <></>
                                <List
                                    itemCount={allPosts.length}
                                    height={700}
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
        </LayoutWrapper>
    );
};
