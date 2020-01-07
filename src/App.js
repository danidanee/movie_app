import React from 'react';
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// state class component를 사용해야된다
class App extends React.Component{
  
  state = {
    isLoading : true,
    movies : []
  };

  // 비동기방식, 다 될때까지 기다린다.
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }
  
  // 제일 먼저 실행되는 라이프 사이클
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? 
          (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              { //배열이므로 {}를 추가해줘야한다.
                movies.map(movie => 
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              }
            </div>
         )
        }
      </section>
    );
  }
}

export default App;
