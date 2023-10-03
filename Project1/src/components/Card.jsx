import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="mypic" className="card_img" />
          <div className="card__info">
            <span className="card__category">{props.platForm}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.netLink} target="_adit">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
