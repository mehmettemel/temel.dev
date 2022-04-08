import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '../components/Container/Container';
import { notionPosts } from '../lib/notion';
import { NotionProps } from '../types/notion-models';

const PlaygroundPage: NextPage<NotionProps> = ({ notionPosts }) => {
  console.log(notionPosts);
  return (
    <Container>
      {notionPosts.map((result: any, index: string) => {
        return (
          <div key={index}>
            {/* <Link href={`/notionPosts/${result.id}`}>
              <Image
                src={result.cover?.external.url}
                width={300}
                height={200}
              />
            </Link> */}
            <div>
              <Link href={`/notionPosts/${result.id}`}>
                <a>{result.properties["'Name'"]}</a>
              </Link>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default PlaygroundPage;

export async function getServerSideProps() {
  // Get the posts
  const results = await notionPosts();
  return {
    props: {
      notionPosts: results,
    },
  };
}
