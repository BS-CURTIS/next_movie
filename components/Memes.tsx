import Image from "next/image";
import Link from "next/link";
import {
  PostLi,
  PostUl,
  PostTitle,
  PostText,
  PostRating,
  PostGeneres,
  PostGenere,
  PostLinks,
  PostLink,
} from "../styles/styled";

interface movie_props {
  id: string;
  name: string;
  url: string;
  width: any;
  height: any;
  box_count: any;
}
const Memes = ({ movies }: any) => {
  return (
    <PostUl>
      {movies.map((movie: movie_props) => (
        <PostLi key={movie.id}>
          <Image
            src={movie.url}
            width={movie.width}
            height={movie.height}
            alt={movie.name}
            layout="responsive"
          />
          <PostTitle>
            <div>{movie.name}</div>
          </PostTitle>
          <PostRating>Rating {movie.box_count}</PostRating>
        </PostLi>
      ))}
    </PostUl>
  );
};

export default Memes;
