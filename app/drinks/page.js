import Drinks from "../../components/Drinks";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if (!response.ok === true) {
    throw new Error("there was an error");
  }
  const data = response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <>
      <Drinks drinks={data.drinks} />
    </>
  ); 
};

export default DrinksPage;
