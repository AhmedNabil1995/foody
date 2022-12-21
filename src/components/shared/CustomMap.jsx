import { React, useState, useEffect, useRef } from "react";

import { MapContainer, useMap, Popup, Marker } from "react-leaflet";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";

import { Box, Button, Container, OutlinedInput, Typography } from "@mui/material";

import markerIconPng from "leaflet/dist/images/marker-icon.png";

import "leaflet/dist/leaflet.css";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import userIcon from "./constatnts";

function TileLayer({ darkMode }) {
  const map = useMap();

  var dark = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  );
  const normal = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  map.addLayer(darkMode ? dark : normal);

  return null;
}

export default function CustomMap({ darkMode }) {
  const [loc, updLoc] = useState();
  const [search, updSearch] = useState();
  function Test({ location, search }) {
    const map = useMap();
    if (location) map.setView(location, 12);

    return location ? (
      <Marker
        draggable
        position={location}
        //ref={markerRef}
        icon={userIcon}
      >
        <Popup>You are here: {search}</Popup>
      </Marker>
    ) : null;
  }

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim({
      geocodingQueryParams: {
        countrycodes: "eg",
      },
    });
    if (search)
      geocoder.geocode(search, (results) => {
        //console.log(results);
        var r = results[0];
        if (r) {
          const { lat, lng } = r?.center;
          updLoc({ lat, lng });
          //console.log(r);
        }
      });
  }, [search]);
  return (
    <Box sx={{ height: "250px", width: "100%", mb: 10 }}>
      <MapContainer
        center={loc || { lat: 30.550964701276385, lng: 31.009036511610887 }}
        zoom={loc ? 20 : 10}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
      >
        <TileLayer darkMode={darkMode}></TileLayer>
        {/* <Marker
          position={[30.550964701276385, 31.009036511610887]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            <Typography textAlign={"center"}> Your location</Typography>
          </Popup>
        </Marker> */}
        <Test location={loc} search={search} />
        {loc?.lat},{loc?.lng}
        {/* {console.log(loc?.lat)} */}
      </MapContainer>
      {/* <input
        placeholder="№,street,zip,city,country"
        onChange={(e) => updSearch(e.target.value)}

      />{" "} */}
      <Container >
        <OutlinedInput
          placeholder="street city area"
          onChange={(e) => updSearch(e.target.value)}
          sx={{ mt: 5 }}
          fullWidth
        />{" "}
      </Container>
    </Box>
  );
}
