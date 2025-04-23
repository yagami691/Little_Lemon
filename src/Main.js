import "./lemon.css";
import Button from "./components/Button";
import restaurantFood from "./assets/restaurantfood.jpg";
import delivery from "./assets/personDolly.png";
import greekSalad from "./assets/greek_salad.jpg";
import OnlineMenu from "./components/Online_Menu.js";
import bruschetta from "./assets/bruchetta.png";
import lemonDessert from "./assets/lemon_dessert.jpg";

import { useNavigate } from "react-router-dom";

export default function Main() {
  const squareStyle = {
    width: "250px",
    height: "250px",
    backgroundImage: `url(${restaurantFood})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: 10,
    position: "absolute",
    right: 80,
    top: 50,
  };

  const greekSaladDescription = `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                                   garnished with crunchy garlic and rosemary croutons. `;

  const bruchettaDescription = `Our Bruschetta is made from grilled bread that has been smeared 
      with garlic and seasoned with salt and olive oil. 
      Toppings of tomato, veggies, beans, cured pork, 
       cheese are examples of variations. In Italy, 
      a brustolina grill is frequently used to create bruschetta.`;

  const lemonDessertDescription = `A refreshing and tangy treat, 
       this lemon dessert combines the zesty flavor of fresh lemons with a smooth,
        sweet base. Perfectly balanced between tart and sweet, 
        it's often served chilled, making it a light and satisfying finish to any meal.`;

  const navigate = useNavigate();

  return (
    <main>
      <section id="presentation">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button
          text="Reserve a Table"
          onClick={() => {
            navigate("/reservations");
          }}
        />
        <div className="square" style={squareStyle}></div>
      </section>
      <section id="specials-weeks">
        <h2>This weeks specials!</h2>
        <Button text="Online Menu" />
      </section>
      <section id="online-menu">
        <OnlineMenu
          image={greekSalad}
          food="Greek Salad"
          price="$12.99"
          description={greekSaladDescription}
          delivery={delivery}
        />
        <OnlineMenu
          image={bruschetta}
          food="Bruchetta"
          price="$7.99"
          description={bruchettaDescription}
          delivery={delivery}
        />
        <OnlineMenu
          image={lemonDessert}
          food="Lemon Dessert"
          price="$20.00"
          description={lemonDessertDescription}
          delivery={delivery}
        />
      </section>
    </main>
  );
}
