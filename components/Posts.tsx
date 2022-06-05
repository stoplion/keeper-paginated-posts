import * as React from 'react';

import { POSTS_PER_PAGE, POSTS_URI } from '../constants';
import { initPagePosts, initPosts, paginatePosts } from '../state/posts';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { Pagination } from './Pagination';
import { RootState } from '../state/store';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function Posts() {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.posts.currentPage
  );
  const pagePosts = useSelector((state: RootState) => state.posts.pagePosts);
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);

  const isLastPage =
    currentPage === Math.floor(allPosts.length / POSTS_PER_PAGE);
  const isFirstPage = currentPage === 1;

  const onPaginate = React.useCallback(
    (direction: number) => {
      if (
        (direction === -1 && isFirstPage) ||
        (direction === 1 && isLastPage)
      ) {
        return;
      }
      dispatch(paginatePosts(direction));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [isFirstPage, isLastPage, dispatch]
  );

  React.useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(POSTS_URI);
      const data = await response.json();

      // await sleep(2000); // uncomment to simulate network latency
      dispatch(initPosts(data));
      dispatch(initPagePosts());
    }

    fetchPosts();
  }, []);

  // uncomment sleep() line above to simulate network latency
  if (pagePosts.length === 0)
    return (
      <div className='loader-screen'>
        <div className='loader' />
      </div>
    );

  return (
    <div className='container'>
      Page — {currentPage} / {Math.floor(allPosts.length / POSTS_PER_PAGE)}
      <section className='posts-wrapper'>
        {pagePosts.map((post) => {
          return (
            <Card
              id={post.id}
              title={post.title}
              body={post.body}
              key={post.id}
            />
          );
        })}
      </section>
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onPaginate={onPaginate}
      />
    </div>
  );
}
