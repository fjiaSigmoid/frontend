import "./Card.css";

const Card = (props) => {
    // const classes = "card " + props.className;
    // console.log(props.children, props.className);
    return <div className={"card " + props.className}>{props.children}</div>;
};

export default Card;
