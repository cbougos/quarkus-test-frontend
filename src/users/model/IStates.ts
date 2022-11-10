import { User } from './User';

export interface UsersPageState {
  users: User[];
  lastEditedUser: User;
}

export interface UserCardState {
  user: User;
  editMode: boolean;
}

export interface GreeterState {
  currentEnthusiasm: number;
}

export interface UserFormError {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserFormState {
  currentUser: User;
  error: UserFormError;
}
