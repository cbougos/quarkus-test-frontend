export class User {
  id: string | undefined;
  email: string = '';
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  avatar: string = '';

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.email) this.email = initializer.email;
    if (initializer.username) this.username = initializer.username;
    if (initializer.firstName) this.firstName = initializer.firstName;
    if (initializer.lastName) this.lastName = initializer.lastName;
    if (initializer.avatar) this.avatar = initializer.avatar;
  }
}
