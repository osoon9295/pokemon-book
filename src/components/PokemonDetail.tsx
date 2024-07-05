import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
// import { useQuery } from "@tanstack/react-query";

const PokemonDetail = async ({ paramsId }: { paramsId: string }) => {
  const response = await fetch(
    `http://localhost:3000/api/pokemons/${paramsId}`
  );
  const result: Pokemon = await response.json();

  const {
    name,
    korean_name,
    weight,
    height,
    types,
    sprites,
    moves,
    abilities,
  } = result;

  let pokemonId = String(paramsId);

  if (pokemonId.length === 1) {
    pokemonId = `00${pokemonId}`;
  }

  if (pokemonId.length === 2) {
    pokemonId = `0${pokemonId}`;
  }

  return (
    <div className="w-4/5 mx-auto my-8 flex flex-col justify-center items-center border-2 rounded-2xl">
      <header className="">
        <h1 className="text-4xl w-fit mx-auto mt-10 mb-5  py-4 px-12 font-bold bg-sky-500 rounded-full">
          {korean_name}
        </h1>
        <div className="w-fit mx-auto">No.0{pokemonId}</div>
      </header>
      <figure className="">
        <Image
          src={`${sprites.front_default}`}
          alt={name}
          width={150}
          height={150}
        />
      </figure>
      <section className=" flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl mt-7 mb-3">상세 정보</h2>
        <p>키 : {height * 10}cm</p>
        <p>몸무게 : {weight / 10}kg</p>
        <p>타입 : {types.map((t) => t.type.korean_name).join(", ")}</p>
        <p>특성 : {abilities.map((a) => a.ability.korean_name).join(", ")}</p>
        <br />
        <p className="font-bold mb-2">기술</p>
        <ul className="grid grid-cols-9 ">
          {moves.map((m) => (
            <li className=" flex justify-center">{m.move.korean_name}</li>
          ))}
        </ul>
      </section>
      <Link href={`/`} className="m-4 bg-slate-300 rounded-full px-6 py-2">
        돌아가기
      </Link>
    </div>
  );
};

export default PokemonDetail;
