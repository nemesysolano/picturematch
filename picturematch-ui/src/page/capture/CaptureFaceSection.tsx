import React, {useContext, useState} from 'react';
import './CaptureFaceSection.css';
import { BackForth, FacePicture, FacePictureInfo } from '../../component';
import { CapturePageWorkflowContext, ONBOARDING_STORAGE_KEY } from './CapturePageWorkflowContext';
import { CapturePageFlowStage } from './types';
import { LocalStorageService } from '../../service';



export const CaptureFaceSection: React.FC = () => {
    const {setWorkflow} = useContext(CapturePageWorkflowContext);
    const [isForthDisabled, setIsForthDisabled] = useState<boolean>(true);
    const onForthRequest = () => setWorkflow({stage: CapturePageFlowStage.ID_FRONT})    
    
    const onTakePicture = (facePictureInfo: FacePictureInfo) => {
        const onboardingInfo = LocalStorageService.getOnboardingInfo(ONBOARDING_STORAGE_KEY);

        LocalStorageService.saveOnboardingInfo({ ...onboardingInfo, faceImageSrc: facePictureInfo.imageSrc});
        setIsForthDisabled(false);
    }
    
    return (
        <div className='vertical-container capture-face-section'>
            <h2>Face Picture</h2>
            <FacePicture imageId='FACE_IMAGE' onTakePicture={onTakePicture} />
            <BackForth className='capture-page-back-forth' isForthDisabled={isForthDisabled} onForthRequest={onForthRequest} />
        </div>
    )
}