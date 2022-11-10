import React, { ReactNode } from 'react';
import './UsersPage.css';
import Greeter from '../greeter/Greeter';
import UserCard from '../user-card/UserCard';
import { UsersPageProps } from '../model/IProps';
import { UsersPageState } from '../model/IStates';
import { User } from '../model/User';
import { MOCK_USERS } from '../mock/MockUsers';

class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
  constructor(props: UsersPageProps) {
    super(props);
    this.state = {users: [...MOCK_USERS], lastEditedUser: MOCK_USERS[0]};
    this.saveUser = this.saveUser.bind(this);
  }

  private saveUser(user: User): void {
    let lastEditedUser: User = new User({username: 'NOBODY'});
    this.setState({
      users: [...this.state.users].map(stateUser => {
        if (stateUser.id === user.id) {
          lastEditedUser = user;
          return user;
        }
        return stateUser;
      }),
      lastEditedUser
    });
  }

  render(): ReactNode {
    return (
      <>
        <h1 className="UserPage-header">Users</h1>
        <div className="UsersPage-body">
          <div className="cards-row row">
            {this.state.users.map(user => (
              <div key={user.id}>
                <UserCard {...{user, onSave: this.saveUser}}/>
              </div>
            ))}
          </div>
        </div>
        <Greeter {...{user: this.state.lastEditedUser, enthusiasmLevel: 0}} />
      </>
    );
  }
}

export default UsersPage;
