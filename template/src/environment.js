import { globals } from "./globals.js";
import { LightProbeGenerator } from "../../3party/three/examples/jsm/lights/LightProbeGenerator.js";
import {BoxNoLights} from "../../common/backgrounds/BoxNoLights.js";
import {BoxWithLights } from "../../common/backgrounds/BoxWithLights.js";
import {CubeMap} from "../../common/backgrounds/CubeMap.js";






function createEnvironment(color){

    //make the background texture:
        const bkgScene = new BoxNoLights( color );
        const background = bkgScene.createPMREM(globals.pmremGen);


    //still unclear why I only need one set of ../ instead of 2 here.....
    // const bkg2 = new CubeMap('../assets/cubeMaps/bridge/', 'jpg');
    // const background2 = bkg2.createPMREM(globals.pmremGen);

    //make the reflection texture:
        const reflScene = new BoxWithLights( color );
        const reflection = reflScene.createPMREM(globals.pmremGen);


        const environment = {
            background: background,
            reflection: reflection,
        }

        return environment;
}


export { createEnvironment };
