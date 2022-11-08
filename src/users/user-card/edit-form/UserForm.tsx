import React, { SyntheticEvent } from "react";
import './UserForm.css'
import { UserFormProps } from '../../model/IProps';
import { UserFormState } from '../../model/IStates';
import { User } from '../../model/User';

class UserForm extends React.Component<UserFormProps, UserFormState> {
  constructor(props: UserFormProps) {
    super(props);
    this.state = {currentUser: new User({...this.props.user})};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChange(event: any): void {
    this.setState({currentUser: new User({...this.state.currentUser, [event.target.name]: event.target.value})})
  }

  private handleSubmit(event: SyntheticEvent): void {
    // event.preventDefault();
    this.props.onSave(this.state.currentUser);
  }

  public render() {
    return (
      <form className="input-group vertical" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter username" value={this.state.currentUser.username} onChange={this.handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter email" value={this.state.currentUser.email} onChange={this.handleChange}/>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="Enter first name" value={this.state.currentUser.firstName} onChange={this.handleChange}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Enter last name" value={this.state.currentUser.lastName} onChange={this.handleChange}/>
        <div className="input-group col-sm user-form-buttons-column">
          <button type="submit" className="primary bordered medium user-form-button">Save</button>
          <span />
          <button type="button" className="secondary bordered medium user-form-button" onClick={this.props.onCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
