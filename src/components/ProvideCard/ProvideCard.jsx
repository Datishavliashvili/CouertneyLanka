import styleCard from "./ProvideCard.module.css";

const ProvideCard = ({ img, title }) => {
  return (
    <div className={styleCard.mainContainer}>
      <img src={img} alt="" className={styleCard.imgs} />
      <p className={styleCard.title}>{title}</p>
    </div>
  );
};

export default ProvideCard;
