import React from 'react';
import { FaReact } from "react-icons/fa";
import { GrServerCluster, GrOverview } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BiSolidFileCss } from "react-icons/bi";

const navigationitems: {
  text: string;
  icon: any;
}[] = [
  { text: 'Overview', icon: <GrOverview /> },
  { text: 'Web Fundamentals', icon: <TbWorldWww /> },
  { text: 'HTML & CSS', icon: <FaHtml5 color='#EB6228'/> },
  { text: 'JavaScript', icon: <IoLogoJavascript color='#EAD54C' /> },
  { text: 'React', icon: <FaReact color='#66c8df'/> },
  { text: 'Servers', icon: <GrServerCluster color='#364C81' /> },
  { text: 'FE Technologies', icon: <BiSolidFileCss color='#3496CF'/> },
];

const advancedNavigationItems: string[] = [
  'Algorithms',
  'Resume Review',
  'Interview Preparation',
  'Resources',
  'Intermediate HTML/CSS',
  'Intermediate React',
  'Intermediate Next.js',
  'Advanced Frontend Concepts',
];

export { navigationitems, advancedNavigationItems };
