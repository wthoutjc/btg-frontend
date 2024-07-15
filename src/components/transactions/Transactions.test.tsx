import { render, screen, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Transactions } from "./Transactions";
import { getTransactions, getUser } from "../../services";

interface Transaction {
  id: string;
  fund: TransactionFund;
  amount: number;
  transaction_type: TransactionType;
  created_at: Date;
}

interface TransactionFund {
  id: string;
  name: string;
  minimum_amount: number;
  category: Category;
}

enum Category {
  FPV = "FPV",
  FIC = "FIC",
}

enum TransactionType {
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
}

vi.mock("../../services", () => ({
  getTransactions: vi.fn(),
  getUser: vi.fn(),
}));

vi.mock("../ui", () => ({
  EnhancedTable: () => <div>Mocked EnhancedTable</div>,
  TableSkeleton: () => <div>Mocked TableSkeleton</div>,
}));

describe("Transactions Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display loading state initially", async () => {
    (getUser as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Promise(() => {})
    );

    await act(async () => {
      render(<Transactions />);
    });

    expect(screen.getByText("Mocked TableSkeleton")).toBeInTheDocument();
  });

  it("should render the transactions table when data is loaded", async () => {
    const mockUser = { _id: "123", name: "John Doe" };
    const mockTransactions: Transaction[] = [
      {
        id: "1",
        fund: {
          id: "1",
          name: "Fund 1",
          minimum_amount: 100,
          category: Category.FPV,
        },
        amount: 100,
        created_at: new Date("2023-01-01"),
        transaction_type: TransactionType.SUBSCRIBE,
      },
      {
        id: "2",
        fund: {
          id: "2",
          name: "Fund 2",
          minimum_amount: 200,
          category: Category.FIC,
        },
        amount: 200,
        created_at: new Date("2023-01-02"),
        transaction_type: TransactionType.UNSUBSCRIBE,
      },
    ];

    (getUser as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockUser);

    (getTransactions as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      mockTransactions
    );

    await act(async () => {
      render(<Transactions />);
    });

    await waitFor(() => {
      expect(
        screen.queryByText("Mocked TableSkeleton")
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText("Mocked EnhancedTable")).toBeInTheDocument();
  });

  it("should display the title correctly", () => {
    (getUser as ReturnType<typeof vi.fn>).mockResolvedValueOnce(null);

    render(<Transactions />);

    expect(screen.getByText("Transacciones")).toBeInTheDocument();
  });
});
