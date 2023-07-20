import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          <ul className="navigation-items">
            <li class="navigation-item">
              <a href="/">Lisbon</a>
            </li>
            <li class="navigation-item">
              <a href="/paris">Paris</a>
            </li>
            <li class="navigation-item">
              <a href="/sydney">Sydney</a>
            </li>
            <li class="navigation-item">
              <a href="/san-francisco">San Francisco</a>
            </li>
          </ul>
        </h3>
        <SearchEngine />
        <div class="weather-summary-header">
          <h1>Lagos</h1>
          <div class="weather-detail__text">Thursday 12:38</div>
          <div class="weather-detail__text">Rain</div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="clearfix">
              <div class="weather-temp weather-temp--today">29</div>
              <div class="weather-unit__text weather-unit__text--today">°C</div>
              <ReactAnimatedWeather
                icon="SNOW"
                color="white"
                size="49"
                animate={true}
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="weather-detail__text">Precipitation: 74%</div>
            <div class="weather-detail__text">Wind: 4km/h</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
