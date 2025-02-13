"use client";
import { cva } from "class-variance-authority";

import { ReactNode } from "react";
import Menu from "../icons/Menu/Menu";

const modalVariants = cva(
  "fixed flex items-center justify-center bg-black bg-opacity-50",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
      },
      variant: {
        default: "bg-white rounded-lg p-6 shadow-lg",
        dark: "bg-gray-900 text-white rounded-lg p-6 shadow-lg flex items-center justify-center",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999] border border-red-500"
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
