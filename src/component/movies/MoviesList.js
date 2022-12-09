import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "reactstrap";
import { useTranslation } from "react-i18next";

import { api } from "../../api/api";
import { GlobalVariable } from "../../constants/globleVariable";
import Movie from "./Movie";

export default function MoviesList() {
  const { i18n, t } = useTranslation();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  // this useEffect is run on first render and every langauge change
  useEffect(() => {
      setIsFirstLoading(true);
      getMovies(1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  /**
   * @name getMovies
   * @description this funcion will call external api to get popular movies
   */
  const getMovies = async (page, concat = true) => {
    let url = `${GlobalVariable.movieDBUrl}${GlobalVariable.poularMoviesAPIEndpoint}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=${page}&language=${i18n.language}`;
    let response = await api(url, {}, "get");
    if (response && response?.status === 200) {
      if (concat) {
        setMovies([...movies, ...response?.data?.results]);
      } else {
        setMovies(response?.data?.results);
      }
    }
    setIsFirstLoading(false);
  };

  /**
   * @name nextPage
   * @description this funcion will when user click on load more
   */
  const nextPage = async () => {
    setIsLoading(true);
    await getMovies(page + 1);
    setPage(page + 1);
    setIsLoading(false);
  };

  return (
    <Row className="m-auto mw-800 justify-content-center">
      {isFirstLoading ? (
        <Spinner className="spinner" color="light" />
      ) : (
        <>
          {movies.map((movie) => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
              />
            );
          })}
          <Col sm={12} className="d-flex justify-content-center">
            <Button
              type="button"
              className="btn-cu-lg w-50"
              color="primary"
              onClick={nextPage}
              disabled={isLoading}
            >
              {isLoading ? <Spinner size={"sm"} /> : t('home.buttonLoadMore')}
            </Button>
          </Col>
        </>
      )}
    </Row>
  );
}
