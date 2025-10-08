import ProvideCard from "../ProvideCard/ProvideCard";
import Provide from "./ProvideSection.module.css";

const ProvideSection = () => {
  const Card = [
    { img: "https://via.placeholder.com/150", title: "Frontend Engineers" },
    { img: "https://via.placeholder.com/150", title: "Angular Developers" },
    {
      img: "https://via.placeholder.com/150",
      title: "AI and ML Engineers Deep Lerning/Machine Vision/NLP",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Application Security Engineers",
    },
    { img: "https://via.placeholder.com/150", title: "Fullstack Engineers" },
    {
      img: "https://via.placeholder.com/150",
      title: "DevOps + DevSecOps Engineers",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Data Scientist / Data Engineers",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "IOS and Android Developers",
    },
    { img: "https://via.placeholder.com/150", title: "UI/UX Engineers" },
    { img: "https://via.placeholder.com/150", title: "PHP Developers" },
    { img: "https://via.placeholder.com/150", title: "Project Managers" },
    { img: "https://via.placeholder.com/150", title: "Solution Architects" },
    { img: "https://via.placeholder.com/150", title: "QA Engineers" },
    {
      img: "https://via.placeholder.com/150",
      title: " Wordpress CMS Developers",
    },
    { img: "https://via.placeholder.com/150", title: "Business Analyst" },
    {
      img: "https://via.placeholder.com/150",
      title: "Tech Leads / Team Leads",
    },
    { img: "https://via.placeholder.com/150", title: "Product Designer" },
    { img: "https://via.placeholder.com/150", title: "Mobile App Developers" },
    {
      img: "https://via.placeholder.com/150",
      title: "Information Scurity Engineers",
    },
    { img: "https://via.placeholder.com/150", title: "Golang Dev" },
    { img: "https://via.placeholder.com/150", title: "Database admin" },
  ];

  return (
    <div className={Provide.test}>
      <div className={Provide.test1}>
        <p className={Provide.title}>Specialized</p>
        <h2 className={Provide.description}>
          Specialized Staff We <br />
          Provide
        </h2>
      </div>
      <div>
        {Card.map((eachElement) => (
          <ProvideCard img={eachElement.img} title={eachElement.title} />
        ))}
      </div>
    </div>
  );
};

export default ProvideSection;
