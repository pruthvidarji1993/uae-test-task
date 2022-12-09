import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MoviesList from "../../component/movies/MoviesList";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.title')}</title>
      </Helmet>
      <section className="mid-section">
        <div className="breadcrumb-data">
          <div className="container">
            <h4 className="mb-0 text-left">{t('home.popularMovieTitle')}</h4>
          </div>
        </div>
        <MoviesList />
      </section>
    </>
  );
}

export default Dashboard;
