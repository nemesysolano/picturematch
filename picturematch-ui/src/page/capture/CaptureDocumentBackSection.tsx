import React, {useContext, useState} from 'react';
import './CaptureDocumentBackSection.css';
import { BackForth, FacePicture, FacePictureInfo } from '../../component';
import { CapturePageWorkflowContext, ONBOARDING_STORAGE_KEY } from './CapturePageWorkflowContext';
import { CapturePageFlowStage } from './types';
import { LocalStorageService } from '../../service';

export const CaptureDocumentBackSection: React.FC = () => {
    const {setWorkflow} = useContext(CapturePageWorkflowContext);
    const [isForthDisabled, setIsForthDisabled] = useState<boolean>(true);
    const onForthRequest = () => setWorkflow({stage: CapturePageFlowStage.FINISH})    
    const onTakePicture = (documentFacePictureInfo: FacePictureInfo) => {
        const onboardingInfo = LocalStorageService.getOnboardingInfo(ONBOARDING_STORAGE_KEY);
        LocalStorageService.saveOnboardingInfo({ ...onboardingInfo, documentBackImageSrc: documentFacePictureInfo.imageSrc});
        setIsForthDisabled(false);
    }
    
    return (
        <div className='vertical-container capture-face-section'>
            <h2>ID::Rear Side</h2>
            <FacePicture imageId='DOCUMENT_BACK' onTakePicture={onTakePicture} />
            <BackForth className='capture-page-back-forth' isForthDisabled={isForthDisabled} onForthRequest={onForthRequest} />
        </div>
    )
}