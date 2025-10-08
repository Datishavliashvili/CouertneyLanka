import ProvideCard from "../ProvideCard/ProvideCard";
import Provide from "./ProvideSection.module.css";
import frontend from "/assets/imgs/frontend.svg";
import angular from "/assets/imgs/angular.svg";
import chip from "/assets/imgs/chip.svg";
import security from "/assets/imgs/security.svg";
import fullstack from "/assets/imgs/fullstack.svg";
import devops from "/assets/imgs/devops.svg";
import datascienist from "/assets/imgs/data-scientist.svg";
import phoneios from "/assets/imgs/phone-ios.svg";
import UI from "/assets/imgs/UI-Engineers.svg";
import PHP from "/assets/imgs/PHP.svg";
import project from "/assets/imgs/project.svg";
import solution from "/assets/imgs/solution.svg";
import QA from "/assets/imgs/QA.svg";
import wordpress from "/assets/imgs/wordpress.svg";
import analyst from "/assets/imgs/analyst.svg";
import techlead from "/assets/imgs/tech-leads.svg";
import productdesigner from "/assets/imgs/product-designer.svg";
import phonedev from "/assets/imgs/phone-developers.svg";
import infosec from "/assets/imgs/info-security.svg";
import golang from "/assets/imgs/golang.svg";
import database from "/assets/imgs/database.svg";

const ProvideSection = () => {
  const Card = [
    { img: frontend, title: "Frontend Engineers" },
    { img: angular, title: "Angular Developers" },
    {
      img: chip,
      title: "AI and ML Engineers Deep Lerning/Machine Vision/NLP",
    },
    {
      img: security,
      title: "Application Security Engineers",
    },
    { img: fullstack, title: "Fullstack Engineers" },
    {
      img: devops,
      title: "DevOps + DevSecOps Engineers",
    },
    {
      img: datascienist,
      title: "Data Scientist / Data Engineers",
    },
    {
      img: phoneios,
      title: "IOS and Android Developers",
    },
    { img: UI, title: "UI/UX Engineers" },
    { img: PHP, title: "PHP Developers" },
    { img: project, title: "Project Managers" },
    { img: solution, title: "Solution Architects" },
    { img: QA, title: "QA Engineers" },
    {
      img: wordpress,
      title: " Wordpress CMS Developers",
    },
    { img: analyst, title: "Business Analyst" },
    {
      img: techlead,
      title: "Tech Leads / Team Leads",
    },
    { img: productdesigner, title: "Product Designer" },
    { img: phonedev, title: "Mobile App Developers" },
    {
      img: infosec,
      title: "Information Scurity Engineers",
    },
    { img: golang, title: "Golang Dev" },
    { img: database, title: "Database admin" },
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
      <div className={Provide.cardContainer}>
        {Card.map((eachElement) => (
          <ProvideCard img={eachElement.img} title={eachElement.title} />
        ))}
      </div>
    </div>
  );
};

export default ProvideSection;
