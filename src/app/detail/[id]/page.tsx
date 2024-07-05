import PokemonDetail from "@/components/PokemonDetail";
import { Pokemon } from "@/types/pokemon";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type DetailPageProps = {
  params: { id: string };
  searchParams: { [key: string]: string };
};

export const generateMetadata = async (
  { params, searchParams }: DetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const id = params.id;
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  const result: Pokemon = await response.json();

  return {
    title: result.korean_name,
    description: `${result.korean_name} 상세 페이지 `,
  };
};

const detailPage = ({ params }: { params: { id: string } }) => {
  const paramsId = params.id;

  return <PokemonDetail paramsId={paramsId} />;
};

export default detailPage;
