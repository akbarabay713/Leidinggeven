import {type ReactNode } from "react";
import s from "./MainLayout.module.scss";

interface IMainLayout {
    children: ReactNode;

}

const MainLayout = ({ children}: IMainLayout) => {

    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
