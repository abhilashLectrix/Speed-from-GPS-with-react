import './App.css';
import { useGeolocated } from "react-geolocated";

function App() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 2000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude :</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude :</td>
          <td>{coords.longitude}</td>
        </tr>
        <tr>
          <td>speed :</td>
          <td>{coords.speed}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default App;
