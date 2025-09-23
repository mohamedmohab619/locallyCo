"use client";

import React from "react";
// import { initFlowbite } from 'flowbite';

type SidebarProps = {
  title: string;
  icon?: React.ReactNode;
  href: string;
};

export default function Sidebar(props: SidebarProps){
//    React.useEffect(() => {
//     // Initialize Flowbite's JavaScript
//     initFlowbite();
//   }, []);
    return(
         <li className="bg-yellow-50 dark:bg-gray-800">
            <a href={props.href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               {props.icon}
               <span className="ms-3">{props.title}</span>
            </a>
         </li>
    )
}