import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useGetPostsQuery} from "../api/postSlice";
import {ListOfCards} from "../ui/ListOfCards";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: white;
`;

const HomeTitle = styled.h1`
  color: #74b2b2;
  font-size: 3rem;
  text-align: center;
`;


export const Home: FC = () => {
    const [pageSize, setPageSize] = useState(10);
    const [pageCount, setPageCount] = useState(1);
    const {data: data, isLoading, isFetching} = useGetPostsQuery([pageSize, pageCount]);

    useEffect(() => {
        console.log(data)
        document.addEventListener('scroll', scrollHandler)
        return  () =>  {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [data]);

    const scrollHandler = () => {
        console.log('scroll')
    }

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
                            <ListOfCards list={data} ></ListOfCards>
                        </>
                    )
                    }
                </>
            }
        </HomeWrapper>
    );
};
