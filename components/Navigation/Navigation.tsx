import Link from 'next/link';
import React from 'react';
import DarkModeToggle from './DarkModeToggleButton';

const Navigation = () => {
  return (
    <div className="w-full dark:bg-gray-900 bg-white">
      <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto  border-b-2 border-slate-500 ">
        <a className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
          <DarkModeToggle />
        </a>
        <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
          <li className="hidden lg:block">
            <Link href="/">
              <a className="px-3 py-2 rounded-lg dark:text-slate-50 text-gray-900 font-extrabold">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/playground">
              <a className="px-3 py-2 rounded-lg dark:text-slate-50 text-gray-900 font-extrabold ">
                Playground
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
