import { React } from "react";

import { MapContainer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";

import { Box, Typography } from "@mui/material";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

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

export default function TrackerMap({
  darkMode,
  countries,
  casesType,
  center,
  zoom,
}) {
  return (
    <Box sx={{ height: "250px", width: "100%" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer darkMode={darkMode}></TileLayer>
        <Marker
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
            <Typography textAlign={"center"}>
              {" "}
              ITI <br /> Menofia Branch.
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
