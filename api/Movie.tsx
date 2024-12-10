import axios from "axios";

export const getPopularMovie = (currentPage = 1) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcyOWUwMTAyYjJmZjhkMDU3M2VhOTY2M2E1MWJiZCIsIm5iZiI6MTY2ODE0ODYyOS4wNzcsInN1YiI6IjYzNmRlZDk1Y2E0ZjY3MDA3YWQ4ZjgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3zCcYz1TK5Btu9pXAyiK78vKgaQPQK4XFVrGIK4WW4'
        }
    };
    return axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options);
}

export const getPopularTVSeries = (currentPage = 1) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcyOWUwMTAyYjJmZjhkMDU3M2VhOTY2M2E1MWJiZCIsIm5iZiI6MTY2ODE0ODYyOS4wNzcsInN1YiI6IjYzNmRlZDk1Y2E0ZjY3MDA3YWQ4ZjgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3zCcYz1TK5Btu9pXAyiK78vKgaQPQK4XFVrGIK4WW4'
        }
    };

    return axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`, options)
}
export const getMovieDetail = ({ movieId }: { movieId: string | string[] }) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzcyOWUwMTAyYjJmZjhkMDU3M2VhOTY2M2E1MWJiZCIsIm5iZiI6MTY2ODE0ODYyOS4wNzcsInN1YiI6IjYzNmRlZDk1Y2E0ZjY3MDA3YWQ4ZjgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3zCcYz1TK5Btu9pXAyiK78vKgaQPQK4XFVrGIK4WW4'
        }
    };

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
}