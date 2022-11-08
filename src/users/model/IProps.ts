import { User } from './User';

export interface UsersPageProps {
}

export interface UserCardProps {
  user: User;
  onSave: (user: User) => void;
}

export interface GreeterProps {
  user: User;
  enthusiasmLevel?: number;
}

export interface UserFormProps {
  user: User
  onSave: (user: User) => void;
  onCancel: () => void;
}
