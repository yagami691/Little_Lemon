export default function OnlineMenu({
  image,
  delivery,
  food,
  price,
  description,
}) {
  return (
    <div className="menu">
      <img src={image} alt="online menu" width="228px" height="150px" />
      <div className="food-price">
        <h4 style={{ fontSize: "20px" }}>{food}</h4>
        <h4 style={{ color: "#EE9972", fontSize: "18px" }}>{price}</h4>
      </div>
      <p
        style={{
          color: "#333333",
          padding: 7,
          fontFamily: "regular",
          fontSize: "18px",
        }}
      >
        {description}
      </p>
      <div className="food-price">
        <h4 style={{ paddingLeft: 7, fontSize: "18px" }}>Order a delivery</h4>
        <img src={delivery} alt="delivery" width="30px" height="30px" />
      </div>
    </div>
  );
}
