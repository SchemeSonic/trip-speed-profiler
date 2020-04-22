import { CompositeLayer } from '@deck.gl/core'
import { GeoJsonLayer } from '@deck.gl/layers'
import SpeedProfilerAdapter from './Adapter'

class SpeedProfiler extends CompositeLayer {
  renderLayers() {
    const data = SpeedProfilerAdapter.routeToLineLayerData(this.props.data)

    const layer = new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      pickable: true,
      getWidth: 10,
      getSourcePosition: (d) => d.from.coordinates,
      getTargetPosition: (d) => d.to.coordinates,
      getLineColor: (d) => [0, 0, 0, 255],
      getLineWidth: 5,
    })
    return layer
  }
}

export default SpeedProfiler
