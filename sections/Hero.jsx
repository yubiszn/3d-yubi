import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {

    const x = useControls('HackerRoom', {
        positionX: {
        value: 2.5,
        min: -10,
        max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }
    })

    const isMobile = useMediaQuery({maxWidth: 768})
    return (
        <section className="min-h-screen w-full flex
        flex-col relative">
            <div className="w-full mx-auto flex flex-col
            sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl
                font-medium text-white text-center font-generalsans">Ayub Ali <span className="waving-hand">🕷️</span></p>
                <p className="hero_tag
                text-gray_gradient">Software Developer</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault
                                           position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                            // scale={0.07}
                            // position={[0, 0, 0]}
                           //  rotation={[0, 280, 0]}
                           position ={[0.9, -9.3, 6.9]}
                           rotation ={[0.2, -Math.PI, 0.0]}
                           scale = {isMobile ? 0.07 : 0.1}
                        />
                        </HeroCamera>

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]}
                    intensity={0.5} />

                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
