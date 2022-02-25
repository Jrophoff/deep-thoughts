import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use query hook to make request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // if data exists sote it in the thoughts constant, if no data exists
  // save an empty array
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">{loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some feed for Thought(s)..." />
        )}</div>
      </div>
    </main>
  );
};

export default Home;
