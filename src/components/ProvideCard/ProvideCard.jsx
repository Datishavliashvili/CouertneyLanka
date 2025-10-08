import styleCard from "./ProvideCard.module.css";

const ProvideCard = ({ img, title }) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <p className={styleCard.title}>{title}</p>
      </div>
    </div>
  );
};

export default ProvideCard;
