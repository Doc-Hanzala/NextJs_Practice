import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.singleid);

  const title = data?.drinks[0]?.strDrink;
  const img = data?.drinks[0]?.strDrinkThumb;


  return (
    <div>
      <Link href="/drinks" className="btn btn-accent text-2xl mt-8 mb-12">
        back to drinks
      </Link>

      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
