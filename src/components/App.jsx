import { Profile } from './Profile/Profile.jsx';
import user from 'data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';

import { FriendsList } from './Friends/FriendsList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics titel="Uplload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
