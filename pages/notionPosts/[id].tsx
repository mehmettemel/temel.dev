import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import styles from '../../styles/Home.module.css';
import { IParams } from '../../types/notion-models';
import { notionBlocks, notionPost, notionPosts } from '../../lib/notion';

interface Props {
  id: string;
  post: any;
  blocks: [any];
}

const renderBlock = (block: any) => {
  switch (block.type) {
    case 'heading_1':
      // For a heading
      return <h1>{block['heading_1'].text[0].plain_text} </h1>;
    case 'image':
      // For an image
      return (
        <Image src={block['image'].external.url} width={650} height={400} />
      );
    case 'bulleted_list_item':
      // For an unordered list
      return (
        <ul>
          <li>{block['bulleted_list_item'].text[0].plain_text} </li>
        </ul>
      );
    case 'paragraph':
      // For a paragraph
      return <p>{block['paragraph'].text[0]?.text?.content} </p>;
    default:
      // For an extra type
      return <p>Undefined type </p>;
  }
};

const NotionPost: NextPage<Props> = ({ id, post, blocks }) => {
  return (
    <div>
      <Head>
        <title>{post.properties.Name.title[0].plain_text}</title>
      </Head>
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </div>
      {blocks.map((block, index) => {
        return <div key={index}>{renderBlock(block)}</div>;
      })}
    </div>
  );
};

export default NotionPost;

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { id } = ctx.params as IParams;
  // Get the dynamic id
  let page_result = await notionPost(id);
  // Fetch the post
  let { results } = await notionBlocks(id);
  // Get the children
  return {
    props: {
      id,
      post: page_result,
      blocks: results,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let { results } = await notionPosts();
  // Get all posts
  return {
    paths: results.map((post) => {
      // Go through every post
      return {
        params: {
          // set a params object with an id in it
          id: post.id,
        },
      };
    }),
    fallback: false,
  };
};
