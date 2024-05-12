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
      <Typography variant="h4" gutterBottom>Welcome SowingDev Members! 🚀</Typography>
      <Typography variant="body2" gutterBottom>
        Welcome to the SowingDev Mentorship Program! <br /><br />
        We&apos;re delighted to
        have you embark on this journey of growth and programming knowledge with
        us. In this Overview Section of the curriculum you can find the high level approach we take 
        to connect with our students. Primarily focused on outcomes and success in the field we take 
        a very personal approach to helping you grow in you technical and organizational skills.
        The resources provided include Frontend/Backend information, Web Technologies,
        interview prep material, resume review tips and tricks and general resources to get you started.
        There is no hard requirement to go through any
        of these resources, but we highly recommend you to do so. With the mentorship you will have a
        curated plan of what to do and what to learn depending on your goals, needs and wants.
        This can vary from a co-working project together, specific algoirthm practice and whiteboarding to 
        even system design explanation and high level problem-solving.
        So if you feel overwhelmed with the information or dont know where to start,
        reach out to your mentor who should be able to steer you in the right direction. Together, we&apos;ll
        cultivate skills, reap the rewards of mentorship, and sow the seeds of
        excellence. Let&apos;s sow, grow, and succeed together! I hope youre as
        excited as we are!
      </Typography>
      <br />
      <Typography variant="body2" gutterBottom>
        This course contains 3 main sections:
      </Typography>
      <div>
        {itemsData.map(({ title }, idx) => {
          return (
            <Typography variant="body2" key={title} gutterBottom>{`${
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
              <div key={title}>
                <Typography variant="body2" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {
                    content.map((sen) => {
                      return (
                        <Typography key={idx} variant="body2" paragraph>
                          {sen}
                        </Typography>
                      );
                    
                    })
                  }
                  {/* {content} */}
                </Typography>
              </div>
              <Divider /> <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
