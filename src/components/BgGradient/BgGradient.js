import { Gradient, GradientCanvas } from "shadergradient";

export const BgGradient = () => {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <GradientCanvas style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
        <Gradient
          cDistance={3.4}
          cPolarAngle={90}
          color1="#ff5005"
          color2="#dbba95"
          color3="#d0bce1"
          positionX={0}
          positionY={0}
          positionZ={-10}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          animate={"on"}
          type="plane"
          toggleAxis={false}
          envPreset="dawn"
          cameraAngle={{
            cAzimuthAngle: 180, 
            cPolarAngle: 90
          }}
          cameraZoom={1}
          grain="on"
          lightType="3d"
          uAmplitude={0.1}
  uSpeed={0.3}
  uTime={0}
  urlString=""
  zoomOut={true}
        />
      </GradientCanvas>
      </div>
    )
}