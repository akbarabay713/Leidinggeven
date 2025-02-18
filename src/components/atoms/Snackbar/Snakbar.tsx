import { cva } from "class-variance-authority";

import { useEffect } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/src/stores/hooks";
import { hideSnackbar } from "@/src/stores/slices/snackbarSlice";

const snackbarVariants = cva(
  "fixed top-5 right-5 px-4 py-2 rounded-md shadow-lg text-sm transition-all duration-300 z-[999999]",
  {
    variants: {
      variant: {
        success: "bg-primary-25 text-primary-600",
        error: "bg-red-100 text-red-700",
        warning: "bg-yellow-100 text-yellow-700",
        info: "bg-blue-100 text-blue-700",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

export const Snackbar = () => {
  const dispatch = useAppDispatch();
  const { message, variant, isOpen } = useAppSelector(
    (state) => state.snackbar
  );

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => dispatch(hideSnackbar()), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

  return (
    <div
      className={cn(
        snackbarVariants({ variant }),
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      {message}
    </div>
  );
};
