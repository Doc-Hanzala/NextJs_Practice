import Link from "next/link";

const Drinks = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link className="text-xl font-bold  " href={`/drinks/${drink.idDrink}`}>
              {drink.strDrink} 
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Drinks;
