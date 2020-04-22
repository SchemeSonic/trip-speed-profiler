import React from 'react'
import DeckGL from '@deck.gl/react'
import { MapView } from '@deck.gl/core'
import { StaticMap } from 'react-map-gl'
import SpeedProfiler from './SpeedProfiler/SpeedProfiler'
import Utils from './SpeedProfiler/Utils'
import MockGenerator from './SpeedProfiler/MockGenerator'

//import { ExampleComponent } from 'speed-profiler'
//import 'speed-profiler/dist/index.css'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoic2NoZW1lc29uaWMiLCJhIjoiY2swY3lxOWhqMDJpcTNjb2NoOGhjZncyZSJ9.lvVwLocCAkKFm3zAei5seA'

// Initial viewport settings
const initialViewState = {
  longitude: 32.50737,
  latitude: 37.848529,
  zoom: 13,
  pitch: 50,
  bearing: 0,
}

const App = () => {
  const data = MockGenerator.generateRoute()
  return (
    <DeckGL initialViewState={initialViewState}>
      <MapView id='map' width='100%' controller={true}>
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </MapView>
      <SpeedProfiler
        data={data}
        onHover={({ shape, x, y }) => {
          debugger
          const content =
            shape && shape.properties
              ? `${shape.properties.atus} - ${shape.properties.ulid}`
              : ''
          Utils.setTooltip('sp-tooltip', content, x, y)

          /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
        }}
      />
      <div
        id='sp-tooltip'
        style={{ position: 'absolute', display: 'none' }}
      ></div>
    </DeckGL>
  )
}

export default App
