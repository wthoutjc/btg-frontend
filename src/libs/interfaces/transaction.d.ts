export interface Transaction {
  id: string;
  fund: TransactionFund;
  amount: number;
  transaction_type: TransactionType;
  created_at: Date;
}

export interface TransactionFund {
  id: string;
  name: string;
  minimum_amount: number;
  category: Category;
}

export enum Category {
  FPV = "FPV",
  FIC = "FIC",
}

export enum TransactionType {
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
}
