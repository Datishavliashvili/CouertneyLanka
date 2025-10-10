import cube1 from "../../assets/cube1.png"
import cube2 from "../../assets/cube2.png"
import cube3 from "../../assets/cube3.png"
import style from './UnderHero.module.css'

const services = [
    {
        img: cube1,
        title: "Architect your Solution",
        text: "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.",
    },
    {
        img: cube2,
        title: "Engineer your Solution",
        text: "We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.",
    },
    {
        img: cube3,
        title: "ReEngineer your Business Process",
        text: "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.",
    },
];


const UnderHero = () => {
    return (
        <>
            <div className={style.box}>

                {
                    services.map((eachService) => (
                        <div className={style.card}>
                            <div className={style.imgback}><img src={eachService.img} alt="cube" /></div>
                            <div>
                                <h3>{eachService.title}</h3>
                                <p>{eachService.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default UnderHero
