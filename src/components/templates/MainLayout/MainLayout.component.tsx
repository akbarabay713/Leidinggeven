import {type ReactNode } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import s from "./MainLayout.module.scss"


interface IMainLayout {
    children: ReactNode;

}

const MainLayout = ({ children}: IMainLayout) => {

    return (
        <>

            <main>{children}</main>
            <div>
            <Typography component="h1" variant="futuraH1Medium" className={s.main}>
            Leidinggeven met en zonder Ego,
                </Typography>
                <Typography component="h1" variant="futuraH1Bold" className={s.main}>
                     Leidinggeven met en zonder Ego,
                </Typography>
                <Typography component="h2" variant="futuraH2Medium" className={s.main}>
                     Leidinggeven met en zonder Ego,
                </Typography>
                <Typography component="h2" variant="futuraH2Bold" className={s.main}>
                     Leidinggeven met en zonder Ego,
                </Typography>


            <Button size="sm" variant="primary">test</Button>
            <Button size="md" variant="primary">test</Button>
            <Button size="lg" variant="primary">test</Button>
            <Button size="xl" variant="primary">test</Button>
            </div>
        </>
    );
};

export default MainLayout;
