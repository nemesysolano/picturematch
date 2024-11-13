import { OnboardingInfo } from "./types"

export const LocalStorageService =  {
    saveOnboardingInfo: (info: OnboardingInfo) => {
        localStorage.setItem(`onboardingInfo-faceImageSrc-${info.id}`, info.faceImageSrc);        
        localStorage.setItem(`onboardingInfo-documentFrontImageSrc-${info.id}`, info.documentFrontImageSrc);
        localStorage.setItem(`onboardingInfo-documentBackImageSrc-${info.id}`, info.documentBackImageSrc);
    },

    getOnboardingInfo: (imageId: string): OnboardingInfo => {
        const faceImageSrc = localStorage.getItem(`onboardingInfo-faceImageSrc-${imageId}`);
        const documentFrontImageSrc = localStorage.getItem(`onboardingInfo-documentFrontImageSrc-${imageId}`);
        const documentBackImageSrc = localStorage.getItem(`onboardingInfo-documentBackImageSrc-${imageId}`);
        return {
            id: imageId,
            faceImageSrc: faceImageSrc || '',
            documentFrontImageSrc: documentFrontImageSrc || '',
            documentBackImageSrc: documentBackImageSrc || ''
        }        
    }
}