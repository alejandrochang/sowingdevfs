import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { SiThealgorithms } from "react-icons/si";
import { FcDocument } from "react-icons/fc";

const navigationitems: {
  text: string;
  icon: any;
}[] = [
  { text: 'Overview', icon: <GrOverview color='#4a3131'/> },
  { text: 'Algorithms', icon: <SiThealgorithms color='#104140'/> },
  { text: 'Resume Review', icon: <FaRegNewspaper color='#EB6228'/> },
  { text: 'Interview Preparation', icon: <FcDocument /> },
  { text: 'Resources', icon: <FaReact color='green'/> },
];

const advancedNavigationItems: string[] = [];

export { navigationitems, advancedNavigationItems };
