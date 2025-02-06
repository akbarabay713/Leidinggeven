import Container from "../../atoms/Container/Container";
import Typography from "../../atoms/Typography/Typography";


import s from "./HeroSection.module.scss"
const HeroSection = () => {
    return ( 
        <section id="hero" className={s.container}>
            <Container>
                <Typography>
                    Leidinggeven met en zonder Ego,
                </Typography>
            </Container>
        </section>
     );
}
 
export default HeroSection;