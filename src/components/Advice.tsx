import{ Dice, DividerD, DividerM } from "../assets";
import { IAdvice } from "../inteface/advice.interface";
import "./Advice.css";

interface Props {
  advice: IAdvice;
  updateAdvice: () => void;
}


export const AdviceContainer: React.FC<Props> = ({advice, updateAdvice}) => {

  return (
    <div className="AdviceContainer">
      <h1 className="Title"> advice #{advice.id}</h1>
      <p className="Advice">"{advice.text}"</p>
      <picture id="Divider" >
        <source media="(max-width:768px)" srcSet={DividerM} />
        <source media="(min-width:769px)" srcSet={DividerD} />
        <img src={DividerM} alt="divider"/>
      </picture>
      <button
        className="Btn"
        id="btn"
        aria-label="generate advice"
        onClick={updateAdvice}
      >
        <img src={Dice} alt="random quote button"/>
      </button>
    </div>
  )
}