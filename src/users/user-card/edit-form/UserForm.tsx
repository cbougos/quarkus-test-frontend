import React, { SyntheticEvent } from 'react';
import './UserForm.css'
import { UserFormProps } from '../../model/IProps';
import { UserFormError, UserFormState } from '../../model/IStates';
import { User } from '../../model/User';

class UserForm extends React.Component<UserFormProps, UserFormState> {
  private readonly USERNAME = 'Username';
  private readonly EMAIL = 'Email';
  private readonly FIRST_NAME = 'First Name';
  private readonly LAST_NAME = 'Last Name';
  private readonly ERROR_MSG = ' is required.';

  constructor(props: UserFormProps) {
    super(props);
    this.state = {currentUser: new User({...this.props.user}), error: {username: '', email: '', firstName: '', lastName: ''}};
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.isValid = this.isValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChange(event: any): void {
    this.setState({currentUser: new User({...this.state.currentUser, [event.target.name]: event.target.value})}, this.validate);
  }

  private validate(): void {
    let error: UserFormError = {username: '', email: '', firstName: '', lastName: ''};
    error.username = this.state.currentUser.username ? '' : this.USERNAME + this.ERROR_MSG;
    error.email = this.state.currentUser.email ? '' : this.EMAIL + this.ERROR_MSG;
    error.firstName = this.state.currentUser.firstName ? '' : this.FIRST_NAME + this.ERROR_MSG;
    error.lastName = this.state.currentUser.lastName ? '' : this.LAST_NAME + this.ERROR_MSG;
    this.setState({error});
  }

  private isValid(): boolean {
    return Object.values(this.state.error).every(value => '' === value);
  }

  private handleSubmit(event: SyntheticEvent): void {
    event.preventDefault();
    if (!this.isValid()) return;
    this.props.onSave(this.state.currentUser);
  }

  public render() {
    return (
      <form className="input-group vertical" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter username" value={this.state.currentUser.username} onChange={this.handleChange}/>
        {this.state.error.username && (
          <div className="card error user-form-error">
            <p>{this.state.error.username}</p>
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter email" value={this.state.currentUser.email} onChange={this.handleChange}/>
        {this.state.error.email && (
          <div className="card error">
            <p>{this.state.error.email}</p>
          </div>
        )}
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="Enter first name" value={this.state.currentUser.firstName} onChange={this.handleChange}/>
        {this.state.error.firstName && (
          <div className="card error">
            <p>{this.state.error.firstName}</p>
          </div>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Enter last name" value={this.state.currentUser.lastName} onChange={this.handleChange}/>
        {this.state.error.lastName && (
          <div className="card error">
            <p>{this.state.error.lastName}</p>
          </div>
        )}
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
