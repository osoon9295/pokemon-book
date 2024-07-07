"use client";

import { useQuery } from "@tanstack/react-query";
import type { Pokemon } from "../types/pokemon";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const fetchPokemons = async (): Promise<Pokemon[]> => {
    const response = await fetch("http://localhost:3000/api/pokemons");
    const result = await response.json();
    return result;
  };

  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>데이터를 불러오는 데 실패했습니다. 다시 시도해 주세요.</div>;
  }

  return (
    <div className="w-10/12 mx-auto grid grid-cols-7">
      {pokemons?.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default PokemonList;
