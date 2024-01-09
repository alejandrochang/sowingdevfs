import React from 'react';

import { listItems } from './contentData';
import { Toolbar, Typography, Divider } from '@mui/material';

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <div>
      <Toolbar />
      <Typography variant="h2" gutterBottom>
        Overview
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This course contains 15 sections:
      </Typography>
      <div>
        {listItems.map(({ title }, idx) => {
          return (
            <Typography key={title} gutterBottom>{`${
              idx + 1
            }. ${title}`}</Typography>
          );
        })}
      </div>
      <br />
      <Divider />
      <br />
      <div>
        {listItems.map(({ title, content }, idx) => {
          return (
            <>
              <Typography variant="h4" key={title} gutterBottom>
                {title}
              </Typography>
              <Typography paragraph>{content}</Typography>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
