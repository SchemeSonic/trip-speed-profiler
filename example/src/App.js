import React from 'react'
import DeckGL from '@deck.gl/react'
import { StaticMap } from 'react-map-gl'
import SpeedProfiler from './SpeedProfiler/SpeedProfiler'

//import { ExampleComponent } from 'speed-profiler'
//import 'speed-profiler/dist/index.css'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoic2NoZW1lc29uaWMiLCJhIjoiY2swY3lxOWhqMDJpcTNjb2NoOGhjZncyZSJ9.lvVwLocCAkKFm3zAei5seA'

// Initial viewport settings
const initialViewState = {
  longitude: -122.269029,
  latitude: 37.80787,
  zoom: 13,
  pitch: 50,
  bearing: 50,
}

const App = () => {
  const data = [
    {
      inbound: 72633,
      outbound: 74735,
      from: {
        name: '19th St. Oakland (19TH)',
        coordinates: [-122.269029, 37.80787],
      },
      to: {
        name: '12th St. Oakland City Center (12TH)',
        coordinates: [-122.271604, 37.803664],
      },
    },
  ]
  return (
    <DeckGL initialViewState={initialViewState} controller={true}>
      <SpeedProfiler data={data} />
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  )
}

export default App
