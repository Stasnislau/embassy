import "./index.scss";

import React, { ReactNode, useCallback, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalMenu: React.FC<Props> = ({ children, setIsOpen, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "initial";
    document.body.style.backgroundColor = isOpen
      ? "rgba(0, 0, 0, 0.5)"
      : "initial";
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {children}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMenu;
