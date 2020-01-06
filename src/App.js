import React from 'react';
import PropTypes from "prop-types";
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
    
    // 3초 뒤 실행
    //setTimeout(() => {
      //this.setState({isLoading : false});
    //}, 3000)
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? 
          (
            <div class="loader">
              <span class="loader_text">Loading...</span>
            </div>
          ) : (
            <div class="movies">
              {
                movies.map(movie => 
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
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
