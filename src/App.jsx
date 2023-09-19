import { Heading } from 'components/Heading/Heading';
import { User } from 'components/User/User';
import userJson from './user.json';

import { Section, DataHead, DataList, Data } from 'components/Data/Data';
import dataJson from './data.json';

import { FriendsList, Friends } from 'components/Friends/Friends';
import friendsJson from './friends.json';
import {
  Transaction,
  TransactionHead,
  TransactionTable,
  TransactionBody,
} from 'components/Transaction/Transaction';
import transactionJson from './transactions.json';

const user = userJson;
const data = dataJson;
const friends = friendsJson;
const transactions = transactionJson;

export const App = () => {
  return (
    <div>
      <Heading>1 - Профіль соціальної мережі</Heading>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Heading>2- Секція статистики</Heading>
      <Section>
        <DataHead>Upload stats</DataHead>
        <DataList>
          {data.map(dataItem => {
            return (
              <Data
                key={`${dataItem.id}`}
                label={dataItem.label}
                percentage={dataItem.percentage}
              />
            );
          })}
        </DataList>
      </Section>

      <Heading>3 - Список друзів</Heading>

      <FriendsList>
        {friends.map(friend => {
          return (
            <Friends
              isOnline={friend.isOnline}
              key={`${friend.id}`}
              avatar={friend.avatar}
              name={friend.name}
            />
          );
        })}
      </FriendsList>

      <Heading>4 - Історія транзакцій</Heading>
      <Transaction>
        <TransactionHead />
        <TransactionBody>
          {transactions.map(transaction => {
            return (
              <TransactionTable
                key={`${transaction.id}`}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            );
          })}
        </TransactionBody>
      </Transaction>
    </div>
  );
};
