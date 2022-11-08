import { User } from './User';

export interface UsersPageState {
  users: User[]
}

export interface UserCardState {
  user: User;
  editMode: boolean;
}

export interface GreeterState {
  currentEnthusiasm: number;
}

export interface UserFormState {
  currentUser: User
}
