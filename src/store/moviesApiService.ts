import axios, { AxiosResponse } from 'axios';
import { Movie } from '../models/Movie';
import { MovieResponse } from '../models/MovieResponse';
import { QueryParams } from '../models/QueryParams';
import { initialQueryParams } from './initialQueryParams';

const MOVIES_API_URL = 'http://localhost:4000/movies';

export class MoviesApiService {
  static async fetchMoviesFromServer(queryParams: QueryParams = initialQueryParams): Promise<Movie[]> {
    const url = MOVIES_API_URL;

    const {
      data: { data: fetchedMovies },
    }: AxiosResponse<MovieResponse> = await axios(url, { method: 'GET', params: queryParams });

    return fetchedMovies;
  }

  static async deleteMovieById(id: number): Promise<number> {
    const url = `${MOVIES_API_URL}/${id}`;

    const { status } = await axios(url, { method: 'DELETE' });

    return status;
  }

  static async createMovie(movie: Partial<Movie>): Promise<number> {
    const url = MOVIES_API_URL;

    const { status } = await axios(url, { method: 'POST', data: movie });

    return status;
  }

  static async editMovie(movie: Partial<Movie> & { id: number }): Promise<number> {
    const url = MOVIES_API_URL;

    const { status } = await axios(url, { method: 'PUT', data: movie });

    return status;
  }
}
