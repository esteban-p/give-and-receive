import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZWFwLXdlYi1kZXYiLCJhIjoiY2t1MnFnbDdvMG1ycDMycWszczY0MjJzbyJ9.Hf0GSH22EZdVGAgnWIrXkQ';


export default function Map() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();


  const createInitialMap = () => {

    navigator.geolocation.getCurrentPosition(res => setLng(res.coords.longitude));
    navigator.geolocation.getCurrentPosition(res => setLat(res.coords.latitude));

    if (map.current) return; // initialize map only once
    
    if (!lng || !lat) {
      console.log('loading'); // add a "loading spinner" later if possible
    } else {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 9
      });
    }
    // Clean up on unmount
    return () => map.remove();
  }



  useEffect(() => {
    createInitialMap();
  }, [lng, lat]);



  return (

    <div>
      <div ref={mapContainer} className="map-container" />
    </div>

  )
}



















// --- 
// Copied from Mapbox tutorial to update map center coords 
// based on the user moving the map. Not needed for now. 
// ---

      // useEffect(() => {
      //   if (!map.current) return; // wait for map to initialize
      //   map.current.on('move', () => {
      //   setLng(map.current.getCenter().lng.toFixed(4));
      //   setLat(map.current.getCenter().lat.toFixed(4));
      //   setZoom(map.current.getZoom().toFixed(2));
      //   });
      // });



  // --- 
  // Copied from Mapbox tutorials in github. I cannot make them work. 
  // ---

      // Add navigation control (the +/- zoom buttons)
      // map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Change cursor to pointer when user hovers over a clickable feature
      // map.on('mouseenter', e => {
      //   if (e.features.length) {
      //     map.getCanvas().style.cursor = 'pointer';
      //   }
      // });