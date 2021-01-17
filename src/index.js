import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//movie imports
const HomePage = lazy(() => import("./pages/homePage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const MovieWatchListPage = lazy(() => import("./pages/movieWatchListPage"));

//tv imports
const AddTvReviewPage = lazy(() => import("./pages/addTvReviewPage"));
const FavoriteTvShowsPage = lazy(() => import("./pages/tvFavoritesPage"));
const TvPage = lazy(() => import("./pages/tvDetailsPage"));
const TvListPage = lazy(() => import("./pages/tvDiscoverPage"));
const AiringTvShowsPage = lazy(() => import("./pages/tvAiringPage"));
const TopRatedTvShowsPage = lazy(() => import("./pages/tvTopRatedPage"));
const TvReviewPage = lazy(() => import("./pages/tvReviewPage"));
const TvWatchListPage = lazy(() => import("./pages/tvWatchListPage"));
const TvShowsContextProvider = lazy(() => import("./contexts/tvShowsContext"));
const TvGenresContextProvider = lazy(() => import("./contexts/tvGenresContext"));

//people imports
const PersonPopularPage = lazy(() => import("./pages/personPopularPage"));
const FavoritePeoplePage = lazy(() => import("./pages/personFavoritesPage"));
const PersonPage = lazy(() => import("./pages/personDetailsPage"));
const PeopleContextProvider = lazy(() => import("./contexts/peopleContext"));

//authentication 
const LoginPage = lazy(() => import("./pages/loginPage"));
const SignUpPage = lazy(() => import("./pages/signUpPage"));
const AuthContext = lazy(() => import("./contexts/authContext"));
const PrivateRoute = lazy(() => import("./privateRoute"));

const App = () => {

  return (
    <BrowserRouter>
      <div className="jumbotron">
        <Suspense fallback={<h2>Loading page....</h2>}>
          <SiteHeader />
          <div className="container-fluid">
            <AuthContext>
              <MoviesContextProvider>
                <TvShowsContextProvider>
                  <GenresContextProvider>
                    <TvGenresContextProvider>
                      <PeopleContextProvider>
                        <Switch>
                          <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                          <PrivateRoute exact path="/tvReviews/form" component={AddTvReviewPage} />
                          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                          <PrivateRoute path="/movies/upcoming" component={UpcomingMoviesPage} />
                          <PrivateRoute path="/movies/watchList" component={MovieWatchListPage} />
                          <PrivateRoute exact path="/tv/favorites" component={FavoriteTvShowsPage} />
                          <PrivateRoute exact path="/tv/watchList" component={TvWatchListPage} />
                          <PrivateRoute exact path="/tv/airing" component={AiringTvShowsPage} />
                          <PrivateRoute exact path="/tv/topRated" component={TopRatedTvShowsPage} />
                          <PrivateRoute exact path="/tv/discover" component={TvListPage} />
                          <PrivateRoute exact path="/person/popular" component={PersonPopularPage} />
                          <PrivateRoute exact path="/person/favorites" component={FavoritePeoplePage} />
                          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                          <PrivateRoute path="/tvReviews/:id" component={TvReviewPage} />
                          <PrivateRoute path="/movies/:id" component={MoviePage} />
                          <PrivateRoute path="/tv/:id" component={TvPage} />
                          <PrivateRoute path="/person/:id" component={PersonPage} />
                          <Route path="/login" component={LoginPage} />
                          <Route path="/signup" component={SignUpPage} />
                          <PrivateRoute path="/" component={HomePage} />
                          <Redirect from="*" to="/" />
                        </Switch>
                      </PeopleContextProvider>
                    </TvGenresContextProvider>
                  </GenresContextProvider>
                </TvShowsContextProvider>
              </MoviesContextProvider>
            </AuthContext>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));