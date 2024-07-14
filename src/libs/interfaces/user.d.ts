export interface User {
  _id: string;
  name: string;
  amount: number;
  notify: Notify;
  created_at: Date;
}

export interface Notify {
  type: string;
  value: string;
}
