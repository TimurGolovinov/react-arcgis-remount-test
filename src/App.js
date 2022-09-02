import "./App.css";
import { useLayoutEffect, useState, useCallback, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import Basemap from "@arcgis/core/Basemap";
import MapView from "@arcgis/core/views/MapView";

export default function App() {
  const [mapInitialised, setMapInitialised] = useState(false);
  const [mounted, setMounted] = useState(false);

  const viewRef = useRef(null);
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    if (mapInitialised) return;

    console.log("App loaded");

    const map = new Map({
      basemap: "topo-vector",
    });
    mapRef.current = map;

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv", // Div element
    });
    viewRef.current = view;

    setMounted(true);
    setMapInitialised(true);
  }, [mapInitialised, mounted]);

  const remount = useCallback(() => {
    viewRef.current.destroy();
    mapRef.current.destroy();
    setMounted(false);
    setMapInitialised(false);
  }, []);

  return (
    <div className="App">
      {mounted && (
        <div id="viewDiv" style={{ width: "100vw", height: "90vh" }} />
      )}
      <button onClick={() => remount()}>Remount</button>
    </div>
  );
}
