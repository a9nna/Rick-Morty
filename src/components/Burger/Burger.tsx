import { useEffect, useState } from "react";
import RightNav from "../../pages/RightNav/RightNav";

import { BurgerStyled } from "./BurgerStyled";
import { useLocation } from "react-router-dom";

export const Burger = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const changeBurgerState = () => {
    setOpen(!open);
  };

  return (
    <>
      <BurgerStyled
        role="button"
        aria-pressed="false"
        aria-label="menu"
        onClick={changeBurgerState}
        open={open}
      >
        <div />
        <div />
        <div />
      </BurgerStyled>
      <RightNav isOpen={open} />
    </>
  );
};
