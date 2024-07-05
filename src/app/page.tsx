import PokemonList from "@/components/PokemonList";

const mainPage = () => {
  return (
    <div>
      <h1 className="text-4xl w-fit mx-auto mt-10 mb-5  py-4 px-12 font-bold bg-amber-500 rounded-full">
        Pokémon
      </h1>
      <PokemonList />
    </div>
  );
};

export default mainPage;
