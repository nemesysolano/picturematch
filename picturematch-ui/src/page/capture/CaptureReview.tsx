import React, { useState } from 'react'
import './CaptureReview.css'
import { LocalStorageService } from '../../service'
import { ONBOARDING_STORAGE_KEY } from './CapturePageWorkflowContext'

export const CaptureReview: React.FC = () => {
    const [onboardingInfo] = useState(LocalStorageService.getOnboardingInfo(ONBOARDING_STORAGE_KEY))

    return (
        <div className='vertical-container capture-review'>
            <h2>Review</h2>
            <div className='review-content'>
                <div className='review-item'>
                    <h3>Face Picture</h3>
                    <img src={onboardingInfo.faceImageSrc} alt='face' />
                </div>
                <div className='review-item'>
                    <h3>ID::Front Side</h3>
                    <img src={onboardingInfo.documentFrontImageSrc} alt='front' />
                </div>
                <div className='review-item'>
                    <h3>ID::Rear Side</h3>
                    <img src={onboardingInfo.documentBackImageSrc} alt='rear' />
                </div>
            </div>
        </div>
    )
}