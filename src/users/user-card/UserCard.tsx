import React from 'react';
import './UserCard.css'
import { User } from '../model/User';
import { UserCardProps } from '../model/IProps';
import { UserCardState } from '../model/IStates';
import UserForm from './edit-form/UserForm';

class UserCard extends React.Component<UserCardProps, UserCardState> {
  constructor(props: UserCardProps) {
    super(props);
    this.state = {user: new User({...this.props.user}) || new User(), editMode: false};
    this.openEditMode = this.openEditMode.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.cancelEditMode = this.cancelEditMode.bind(this);
  }

  private openEditMode(): void {
    this.setState({...this.state, editMode: !this.state.editMode});
  }

  private saveUser(user: User): void {
    this.setState({user: new User({...user})});
    this.cancelEditMode();
    this.props.onSave(user);
  }

  private cancelEditMode(): void {
    this.setState({editMode: false});
  }

  public render() {
    return (
      <>
        <div key={this.state.user.id} className="card">
          <img src={this.state.user.avatar} alt={this.state.user.username}/>
          <section className="section dark">
            <div className="strong row">
              <strong>Username : {this.state.user.username}</strong>
            </div>
            <div className="row">First Name : {this.state.user.firstName}</div>
            <div className="row">Last Name : {this.state.user.lastName}</div>
            <div className="row">Email : {this.state.user.email}</div>
            <button className="bordered" onClick={this.openEditMode}>
              <span className="icon-edit "></span>
              Edit
            </button>
          </section>
        </div>
        {this.state.editMode ? (<UserForm {...{user: this.state.user, onSave: this.saveUser, onCancel: this.cancelEditMode}}/>) : (<div></div>)}
      </>
    );
  }
}

export default UserCard;
