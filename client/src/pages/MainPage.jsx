import React from 'react';
import Post from '../components/Post';
import { PageDiv } from './SignUpPage';

const MainPage = () => {
  const datas = [
    {
      title: '제목',
      alt: '이미지이름',
      date: '2023-05-31',
      hashTag: ['#하하'],
    },
    {
      title: '제목',
      alt: '이미지이름',
      date: '2023-05-31',
      hashTag: ['#하하'],
    },
    {
      title: '제목',
      alt: '이미지이름',
      date: '2023-05-31',
      hashTag: ['#하하'],
    },
    {
      title: '제목',
      alt: '이미지이름',
      date: '2023-05-31',
      hashTag: ['#하하'],
    },
  ];
  return (
    <PageDiv>
      {datas.map((data, idx) => (
        <Post {...data} key={idx} />
      ))}
    </PageDiv>
  );
};

export default MainPage;
