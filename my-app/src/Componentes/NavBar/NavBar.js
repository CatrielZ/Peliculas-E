import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import StartRankingFilter from '../StarsRanking/starsRankingFilter';
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav class="navbar navbar-expand-lg  pb-0 pt-0 fw-bold contenidoNavBar w-100 text-center">
        <div class="container-fluid text-center">
          <a class="navbar-brand" href="/">Peliculas</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <StartRankingFilter/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;