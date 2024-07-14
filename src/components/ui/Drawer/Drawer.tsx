// Zustand
import { useUIStore } from "../../../zustand/store";

// Components
import DrawerList from "./DrawerList";
import { DrawerHead } from "./DrawerHead";
import { DrawerListClosed } from "./DrawerListClosed";
import { StyledDrawer } from "../../../components/styled/StyledDrawer/StyledDrawer";

const Drawer = () => {
  const { drawer } = useUIStore((state) => state);
  const { open } = drawer;

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHead />
      {open ? <DrawerList /> : <DrawerListClosed />}
    </StyledDrawer>
  );
};

export { Drawer };
