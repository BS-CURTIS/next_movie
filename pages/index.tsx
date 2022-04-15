import Movie from "../components/Movie";
import { GetStaticProps } from "next";
import { Contatiner } from "../styles/styled";
import Memes from "../components/Memes";
interface movies {
  movies: any;
}

const Index = ({ movies }: movies) => {
  return (
    <Contatiner>
      <Memes movies={movies} />
    </Contatiner>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.imgflip.com/get_memes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "*",
    },
  });
  const json = await res.json();
  const movies = json.data.memes;
  return {
    props: {
      movies,
    },
    revalidate: 10,
  };
};

export default Index;
