import Movie from "../components/Movie";
import { GetStaticProps } from "next";
import { Contatiner } from "../styles/styled";
interface movies {
  movies: any;
}

const Index = ({ movies }: movies) => {
  return (
    <Contatiner>
      <Movie movies={movies} />
    </Contatiner>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://yts.torrentbay.to/api/v2/list_movies.json?quality=2160p&sort_by=rating",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
    }
  );
  const json = await res.json();
  const movies = json.data.movies;
  return {
    props: {
      movies,
    },
    revalidate: 10,
  };
};

export default Index;
