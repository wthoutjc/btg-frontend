import { Fund } from "./fund";

export interface Transaction {
  id: string;
  fund: Fund;
  amount: number;
  transaction_type: TransactionType;
  created_at: Date;
}

export enum Category {
  Fpv = "FPV",
}

export enum ID {
  The66920Eaf7E3E6860Db7D1923 = "66920eaf7e3e6860db7d1923",
}

export enum Name {
  FpvBtgPactualRecaudadora = "FPV_BTG_PACTUAL_RECAUDADORA",
}

export enum TransactionType {
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
}
