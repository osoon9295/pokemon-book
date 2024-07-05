import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonProps> = ({ pokemon }) => {
  let pokemonId = String(pokemon.id);

  if (pokemonId.length === 1) {
    pokemonId = `00${pokemonId}`;
  }

  if (pokemonId.length === 2) {
    pokemonId = `0${pokemonId}`;
  }

  return (
    <div className="flex flex-col item-center justify-center border w-28 h-36 m-2 shadow-md rounded-sm">
      <Link href={`/detail/${pokemon.id}`} className="text-center">
        <p>
          <span className="w-fit text-xs  px-1  rounded-2xl bg-slate-200 m-1">
            {pokemonId}
          </span>
          <span className="w-fit py-0 px-1 mx-auto bg-slate-200 text-xs rounded-2xl">
            {pokemon.korean_name}
          </span>
        </p>

        <Image
          src={`${pokemon.sprites.front_default}`}
          width={150}
          height={150}
          alt={pokemon.name}
          className="m-auto"
        />
      </Link>
    </div>
  );
};

export default PokemonItem;
