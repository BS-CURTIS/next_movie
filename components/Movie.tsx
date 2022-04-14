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
  title_long: string;
  rating: string;
  genres: [];
  summary: string;
  medium_cover_image: string;
  torrents: [];
}
const Movie = ({ movies }: any) => {
  return (
    <PostUl>
      {movies.map((movie: movie_props) => (
        <PostLi key={movie.id}>
          <Image
            src={movie.medium_cover_image}
            width={230}
            height={345}
            alt={movie.title_long}
            layout="responsive"
          />
          <PostTitle>
            <div>{movie.title_long}</div>
          </PostTitle>
          <PostRating>Rating {movie.rating}</PostRating>
          <PostGeneres>
            {movie.genres.map((genre, index) => (
              <PostGenere key={index}>{genre}</PostGenere>
            ))}
          </PostGeneres>
          <PostText>
            <div>{movie.summary}</div>
          </PostText>

          <PostLinks>
            {movie.torrents.map((torrent: any, index) => (
              <PostLink key={index}>
                <Link href={`${torrent.url}`}>
                  <a>links {torrent.quality}</a>
                </Link>
              </PostLink>
            ))}
          </PostLinks>
        </PostLi>
      ))}
    </PostUl>
  );
};

export default Movie;
