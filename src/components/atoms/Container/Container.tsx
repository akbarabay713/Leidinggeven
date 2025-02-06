
import type { ReactNode } from "react";
import s from "./Container.module.scss";

interface IContainerProps {
    children?: ReactNode;
    className?: string;
}
const Container = ({ children }: IContainerProps) => {
    return <div className={s.container}>{children}</div>;
};

export default Container;
