import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { User } from "./User";
import { getUser } from "../../services/user";
import { User as IUser } from "../../libs/interfaces/user";

vi.mock("../../services/user", () => ({
  getUser: vi.fn(),
}));

vi.mock("./UpdateNotification", () => ({
  UpdateNotification: ({ user }: { user: IUser }) => (
    <div>Mocked UpdateNotification for {user.name}</div>
  ),
}));

vi.mock("../../zustand/store", () => {
  const setDialog = vi.fn();
  return {
    useUIStore: () => ({
      setDialog,
      alerts: [],
    }),
    setDialog,
  };
});

describe("User Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display loading state initially", async () => {
    (getUser as ReturnType<typeof vi.fn>).mockReturnValue(
      new Promise(() => {})
    );

    render(<User />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render the user card when data is loaded", async () => {
    const mockUser: IUser = {
      name: "John Doe",
      amount: 1000,
      notify: {
        type: "email",
        value: "john.doe@example.com",
      },
      _id: "123",
      created_at: new Date(),
    };

    (getUser as ReturnType<typeof vi.fn>).mockResolvedValue(mockUser);

    render(<User />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Saldo actual:")).toBeInTheDocument();
    expect(
      screen.getByText("email - john.doe@example.com")
    ).toBeInTheDocument();
  });
});
