import { TransactionType } from "./transaction";

export interface Fund {
  id: string;
  name: string;
  minimum_amount: number;
  category: string;
  last_transaction: LastTransaction | null;
}

export interface LastTransaction {
  id: string;
  user_id: string;
  fund_id: string;
  amount: number;
  transaction_type: TransactionType;
  created_at: string;
}
