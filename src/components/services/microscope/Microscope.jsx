import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MicroscopeModel(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}/microscopeModel.glb`)
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.MicroscopeBase_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Binocular2_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Binocular1_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BinocularMechanism_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BinocularLens_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Lens_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ScrewPlatform_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ObjectiveLensesConfig_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ObjectiveLens_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ObjectiveLenses_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.LightProtection_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.HeadLight_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Diaphragm_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.DiaphragmConfig_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.AbbeCondeser_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.MicroscopeLegs_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.SidePanel_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.OnOffSwitchEdge_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PowerSupply_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.EnergyTranfer_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BackPanel_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Handle_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FineAdjustment_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CoarseAdjustment_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.DimmingHandWHeel_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.smallDialButton_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RevolvingNosePiece_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.SlideHolder_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.MechanicalStage_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FrontBackConfig_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PlatformConfiguration_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Dimension_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RulerConfiguration_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RulerMechanism_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Platform_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BinocularRotationalHead_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BinocularRotationSystem_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Holder_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.HolderRotationSystem_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.MaintainHolder_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.OnOffSwitch_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RulerLeftRight_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.LensDialSystem_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.BinocularRotationalHeadTop_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.smallDialButtonDial_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -25.468]} />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}/microscopeModel.glb`);
