export interface User {
  _id: string;
  username: string;
  email: string;

  verified: boolean;

  reputation: number;

  avatar?: string;
}