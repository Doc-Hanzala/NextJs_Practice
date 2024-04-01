const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if(!response.ok === true){
    throw new Error("there was an error")
  }
  const data = response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);

  return (
    <>
      <h1 className="text-5xl font-bold">drinks page</h1>
    </>
  );
};

export default DrinksPage;
