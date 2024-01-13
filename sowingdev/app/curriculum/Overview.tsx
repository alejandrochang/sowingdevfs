import React from 'react';
import { Toolbar, Typography, Divider } from '@mui/material';

import { listItems } from './contentData';

interface OverviewProps {
  // Define the props for the component here
}

const Overview: React.FC<OverviewProps> = (props) => {
  const itemsData = listItems.slice(0, 7);

  return (
    <div>
      <Typography variant='body2' gutterBottom>
        Welcome to the SowingDev Mentorship Program! We&apos;re delighted to
        have you embark on this journey of growth and knowledge with us. We are
        delighted to partner with you in your coding journey our community is
        dedicated to nurturing talent, fostering collaboration, and helping you
        thrive in the world of development. Together, we&apos;ll cultivate
        skills, reap the rewards of mentorship, and sow the seeds of excellence.
        Let&apos;s sow, grow, and succeed together!
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
            <>
              <Typography variant='body2' key={title} gutterBottom>
                {title}
              </Typography>
              <Typography variant='body2' paragraph>{content}</Typography>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;