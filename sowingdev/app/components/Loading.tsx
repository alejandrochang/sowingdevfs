import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';

const Loading: React.FC = () => {
  const { status } = useSession();
  const isLoading = status === 'loading';

  return isLoading && (
    <div>
      <CircularProgress />
    </div>
  );
};

export default Loading;
