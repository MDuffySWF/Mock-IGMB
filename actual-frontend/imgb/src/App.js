import { useEffect, useState } from 'react';
import TBar from './Components/TBar'
import HomeScreen from './Components/HomeScreen'
import SingleMovie from './Components/SingleMovie'
import Login from './Components/Login'
import './App.css';







function App() {
    // const []
    const [movies, setAllMovies] = useState([])
    const [currentMovie, setCurrentMovie] = useState({});
    const [user, setUser] = useState({})
    const [toggleLogin, setToggleLogin] = useState(false)

    useEffect( () => {
        getAllMovies();
    }, [])

    const getAllMovies = () => {
        fetch("http://localhost:3001/movies")
            .then(res => {
                return res.json();
            })
            .then( (data) => {
                setAllMovies(data);
                console.log(data)
            })
    }
    const getSingleMovie =(id)=>{
        fetch(`http://localhost:3001/movies/${id}`)
           .then(res => {
                return res.json();
            })
           .then(data => {
                setCurrentMovie(data);
            })}

    const setNewReview = ()=>{
    }
    const Test = () =>{
        if((!toggleLogin)&&(!currentMovie.id)){
            return <HomeScreen allMovies ={movies}  getSingleMovie={getSingleMovie}/>
        } else if ((!toggleLogin) && (currentMovie.id)){
            return <SingleMovie currentMovie ={currentMovie}/>
        } else{
            return <Login/>
        }
    }


  return (
      <>
          <TBar setToggleLogin = {setToggleLogin} setCurrentMovie ={setCurrentMovie} setToggleLogin ={setToggleLogin} setAllMovies={setAllMovies}/>
          {/*<>{Test()}</>*/}
          {currentMovie.movieId && <SingleMovie currentMovie ={currentMovie} setCurrentMovie ={setCurrentMovie} email = {user.email} />}
          {toggleLogin && <Login setToggleLogin ={setToggleLogin} setUser = {setUser} />}
          {!toggleLogin && !currentMovie.movieId && <HomeScreen allMovies ={movies}  getSingleMovie={getSingleMovie}/>}
      </>
  );
}

export default App;
