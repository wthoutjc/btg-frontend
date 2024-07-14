import { ModeTransaction } from "../../libs/enums";

interface Props {
  mode: ModeTransaction;
}

const HandleTransaction = ({ mode }: Props) => {
  return <div>HandleTransaction - {mode}</div>;
};

export { HandleTransaction };
