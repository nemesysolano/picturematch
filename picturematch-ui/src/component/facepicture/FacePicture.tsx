import React, { useEffect, useRef } from 'react';
import './FacePicture.css';
import Webcam from 'react-webcam';
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import { FacePictureInfo } from './types';

const onTakePictureDefault = (facePictureInfo: FacePictureInfo) => {};
const FacePicturePreview: React.FC<{imageSrc: string, imageId: string}> = ({imageSrc, imageId}) => (<img id={imageId} src={imageSrc} alt='face-preview' />)

export type  FacePictureProperties = {
    imageId: string;
    onTakePicture?: (facePictureInfo: FacePictureInfo) => void;
    className?: string; 
}


export const FacePicture: React.FC<FacePictureProperties> = (properties: FacePictureProperties) => {
    const imageId = properties.imageId;
    const onTakePicture = properties.onTakePicture || onTakePictureDefault
    const className = `life-picture ${properties.className || ''}`.trim()
    const [imageSrc, setImageSrc] = React.useState<string>('');
    const webcam = useRef<Webcam>(null);
    const width = 480 * 0.75; 
    const height = 720 * 0.75;
    const videoConstraints = {
        width: { min: width },
        height: { min: height }
      };
    const [ cameraOn, setCameraOn ] = React.useState(true);  

    const onTakePictureButtonClick = () => {
        if(cameraOn) {
            const imageSrc = webcam.current?.getScreenshot();
            setImageSrc(imageSrc || '');            
        } else {
            setCameraOn(true);
        }
        
    }

    useEffect(() => {
        if (!cameraOn) {
            let stream = webcam.current ? webcam.current.stream : null;
            const facePictureInfo: FacePictureInfo = { imageSrc: imageSrc}
            const tracks = stream?.getTracks() || [];
            tracks.forEach(track => track.stop());
            onTakePicture(facePictureInfo);         
            console.log('FacePicture useEffect', facePictureInfo);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cameraOn]);

    useEffect(() => {
        if(imageSrc) {
            setCameraOn(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageSrc]);

    return (
        <div className={className}>
            {cameraOn ?
                <Webcam
                    audio={false}
                    ref={webcam}
                    forceScreenshotSourceSize={true}   
                    width={height/2} 
                    height={width/2}      
                    videoConstraints={videoConstraints}     

                /> : 
                <FacePicturePreview imageSrc={imageSrc} imageId={imageId}/>
            }            
            <button onClick={onTakePictureButtonClick} type='button' className='take-picture-button' disabled={!cameraOn}><span role='img' aria-label='camera-icon'>📷</span></button>
        </div>
    );
}