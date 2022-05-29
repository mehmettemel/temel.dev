import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import { notionPosts } from '../lib/notion';
import { projectNamesData } from '../lib/projectNames';
import { IProjectNames } from '../types/projectNamesModel';

const PlaygroundPage: NextPage = () => {
  const [projectNames, setProjectNames] = useState<IProjectNames[]>([]);
  useEffect(() => {
    setProjectNames(projectNamesData);
  }, [projectNames]);
  return (
    <Container>
      <div className="main flex flex-col m-5">
        <div className="header">
          <div className="text-3xl font-bold text-primary mb-4">Works</div>
        </div>
        {projectNamesData?.map((item) => {
          return (
            <>
              <Link href={item.route}>
                <a key={item.id}>
                  <div className="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 border-primary cursor-pointer">
                    <div className="left">
                      <div className="header text-primary font-semibold text-2xl">
                        {item.name}
                      </div>
                      <div className="desc text-primary">
                        {item.description}
                      </div>
                    </div>
                    <div className="right m-auto mr-0">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default PlaygroundPage;
