import { CompositeLayer } from '@deck.gl/core'
import { LineLayer } from '@deck.gl/layers'

class SpeedProfiler extends CompositeLayer {
  renderLayers() {
    const layer = new LineLayer({
      id: 'line-layer',
      data: this.props.data,
      pickable: true,
      getWidth: 50,
      getSourcePosition: (d) => d.from.coordinates,
      getTargetPosition: (d) => d.to.coordinates,
      getColor: (d) => [Math.sqrt(d.inbound + d.outbound), 140, 0],
      onHover: ({ object, x, y }) => {
        const tooltip = `${object.from.name} to ${object.to.name}`
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      },
    })
    return layer
  }
}

export default SpeedProfiler
