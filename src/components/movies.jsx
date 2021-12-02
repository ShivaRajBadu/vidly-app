import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Genre from "./genre";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      selectedGenre,
      currentPage,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0) return <p> there are no movies in the database</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="d-flex m-2">
          <div>
            <Genre
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="mx-5">
            <p> showing {filtered.length} movies in the dat abase</p>
            <MovieTable
              sortColumn={sortColumn}
              onSort={this.handleSort}
              movies={movies}
              onlike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChnage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handlePageChnage = (page) => {
    this.setState({ currentPage: page });
  };
  handleDelete = (id) => {
    let updateMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies: updateMovies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    // if (movie.liked === true) {
    //   movies[index].liked = false;
    // } else movies[index].liked = true;
    this.setState({ movies });
    console.log("hello");
  };
}

export default Movies;
