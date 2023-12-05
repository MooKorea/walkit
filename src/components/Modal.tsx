"use client";

import { useEffect, useState } from "react";
import Panel from "./Panel";
import PanelButton from "./PanelButton";
import CloseButton from "./icons/CloseButton";
import { useAnimate } from "framer-motion";

interface Modal {
  children: React.ReactNode;
  buttonLabel: string;
  height?: string;
  highlight?: boolean;
  center?: boolean;
  noClose?: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  href?: string;
}

export default function Modal({
  children,
  buttonLabel,
  height = "h-[11.938rem]",
  highlight = false,
  center = false,
  noClose = false,
  setModalOpen,
  href,
}: Modal) {
  const [scope, animate] = useAnimate();
  const [scope1, animate1] = useAnimate();
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    animate(
      scope.current,
      {
        opacity: closed ? 0 : 1,
      },
      {
        duration: 0.1,
        delay: closed ? 0 : 0.12,
        onComplete() {
          if (closed) setModalOpen(false);
        },
      }
    );
    animate1(
      scope1.current,
      {
        y: closed ? "1.5rem" : "-4rem",
      },
      {
        delay: closed ? 0 : 0.12,
      }
    );
  }, [closed]);

  return (
    <div
      ref={scope}
      className="opacity-0 fixed w-full h-full z-10 flex flex-col items-center justify-center bg-white/[0.5]"
    >
      <div
        ref={scope1}
        className="flex flex-col items-center justify-center gap-[0.625rem]"
      >
        <Panel height={(center ? "flex items-center justify-center " : "") + height} top>
          {children}
          {!noClose && (
            <div
              onClick={() => setClosed(true)}
              className="absolute right-0 top-0 w-11 h-10 flex items-end"
            >
              <CloseButton />
            </div>
          )}
        </Panel>
        <PanelButton bottom highlight={highlight} href={href}>
          {buttonLabel}
        </PanelButton>
      </div>
    </div>
  );
}
