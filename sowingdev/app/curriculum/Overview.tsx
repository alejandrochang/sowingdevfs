import React from 'react';
import { Toolbar, Typography, Divider } from '@mui/material';

import { listItems } from './contentData';

interface OverviewProps {
  // Define the props for the component here
}

const Overview: React.FC<OverviewProps> = (props) => {
  const itemsData = listItems.slice(0, 6);

  return (
    <div>
      <Typography variant='body2' gutterBottom>
        Welcome to the SowingDev Mentorship Program! We&apos;re delighted to
        have you embark on this journey of growth and programming knowledge with us. 
        In this Overview Section of the curriculum you can find a lot of examples and resources 
        that can be beneficial for your learning journey. These resources include Frontend, Backend, Web Technologies and interview prep material.
        There is no hard requirement to go through any of these resources, but we highly recommend you to do so. Additionally, with the 
        mentorship you will have a more curated plan of what to do and what to learn. So if you 
        feel overwhelmed or dont know where to start, don&apos;t worry, your mentor will help you.
        Together, we&apos;ll cultivate
        skills, reap the rewards of mentorship, and sow the seeds of excellence.
        Let&apos;s sow, grow, and succeed together! I hope youre as excited as we are!
      </Typography>
      <br />
      <Typography variant='body2' gutterBottom>
        This course contains 7 main sections:
      </Typography>
      <div>
        {itemsData.map(({ title }, idx) => {
          return (
            <Typography variant='body2' key={title} gutterBottom>{`${
              idx + 1
            }. ${title}`}</Typography>
          );
        })}
      </div>
      <br />
      <Divider />
      <br />
      <div>
        {itemsData.map(({ title, content }, idx) => {
          return (
            <div key={title}>
              <Typography variant='body2' gutterBottom>
                {title}
              </Typography>
              <Typography variant='body2' paragraph>{content}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
