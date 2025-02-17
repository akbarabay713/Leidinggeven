"use client";
import { cva } from "class-variance-authority";

import { ReactNode } from "react";
import Menu from "../icons/Menu/Menu";

const modalVariants = cva("fixed flex-col flex  overflow-hidden bg-black", {
  variants: {
    size: {
      sm: "w-[20%]",
      md: "lg:w-[40%] w-[95%]",
      lg: "max-w-[660px] ",
      xl: "w-[60%]",
    },
    variant: {
      default: "bg-white rounded-lg shadow-lg",
      dark: "bg-white rounded-lg shadow-lg flex   opacity-100",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "dark";
};

export default function Modal({
  isOpen,
  onClose,
  children,
  size,
  variant,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]"
      onClick={onClose}
    >
      <div
        className={modalVariants({ size, variant })}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <Menu />
        </button>
        {children}
      </div>
    </div>
  );
}
