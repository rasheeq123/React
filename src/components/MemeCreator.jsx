import React from 'react'
import { Layer, Rect, Stage } from 'react-konva'

const MemeCreator = () => {
  return (
    <div>
        <div className="container py-5">
            <h1>
                Meme Creator
            </h1>
            <hr />
            <Stage width={600} height={400} >
                <Layer>
                    <Rect
                    x={0}
                    y={0}
                    width={100}
                    height={100}
                    fill="red"
                    />
                    <Rect
                    x={100}
                    y={50}
                    width={100}
                    height={100}
                    fill="green"
                    stroke={'yellow'}
                    strokeWidth={4}
                    />
                </Layer>

            </Stage>

        </div>
    </div>
  )
}

export default MemeCreator