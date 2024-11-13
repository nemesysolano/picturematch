import React, {useContext, useState} from 'react';
import './CaptureDocumentFrontSection.css';
import { BackForth, FacePicture, FacePictureInfo } from '../../component';
import { CapturePageWorkflowContext, ONBOARDING_STORAGE_KEY } from './CapturePageWorkflowContext';
import { CapturePageFlowStage } from './types';
import { LocalStorageService } from '../../service';

export const CaptureDocumentFrontSection: React.FC = () => {
    const {setWorkflow} = useContext(CapturePageWorkflowContext);
    const [isForthDisabled, setIsForthDisabled] = useState<boolean>(true);
    const onForthRequest = () => setWorkflow({stage: CapturePageFlowStage.ID_BACK})    
    const onTakePicture = (documentFacePictureInfo: FacePictureInfo) => {
        const onboardingInfo = LocalStorageService.getOnboardingInfo(ONBOARDING_STORAGE_KEY);
        LocalStorageService.saveOnboardingInfo({ ...onboardingInfo, documentFrontImageSrc: documentFacePictureInfo.imageSrc});
        setIsForthDisabled(false);
    }
    
    return (
        <div className='vertical-container capture-face-section'>
            <h2>ID::Front Side</h2>
            <FacePicture imageId='DOCUMENT_FRONT' onTakePicture={onTakePicture} />
            <BackForth className='capture-page-back-forth' isForthDisabled={isForthDisabled} onForthRequest={onForthRequest} />
        </div>
    )
}