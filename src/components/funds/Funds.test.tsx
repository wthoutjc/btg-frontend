import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Funds } from "./Funds";
import { getFunds } from "../../services";
import { Fund } from "../../libs";

vi.mock("../../services", () => ({
  getFunds: vi.fn(),
}));

vi.mock("../ui", () => ({
  EnhancedTable: () => <div>Mocked EnhancedTable</div>,
  TableSkeleton: () => <div>Mocked TableSkeleton</div>,
}));

describe("Funds Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display loading state initially", async () => {
    (getFunds as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Promise(() => {})
    );

    render(<Funds />);

    expect(screen.getByText("Mocked TableSkeleton")).toBeInTheDocument();
  });

  it("should render the funds table when data is loaded", async () => {
    const mockFunds: Fund[] = [
      {
        id: "asd1",
        name: "Fund 1",
        minimum_amount: 100,
        category: "Category 1",
        last_transaction: null,
      },
      {
        id: "asd2",
        name: "Fund 2",
        minimum_amount: 200,
        category: "Category 2",
        last_transaction: null,
      },
    ];

    (getFunds as ReturnType<typeof vi.fn>).mockResolvedValue(mockFunds);

    render(<Funds />);

    await waitFor(() => {
      expect(
        screen.queryByText("Mocked TableSkeleton")
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText("Mocked EnhancedTable")).toBeInTheDocument();
  });

  it("should display the title correctly", () => {
    render(<Funds />);
    expect(screen.getByText("Fondos")).toBeInTheDocument();
  });
});
