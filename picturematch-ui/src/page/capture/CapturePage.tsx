import React, { useContext } from 'react';
import './CapturePage.css';
import { CaptureFaceSection } from './CaptureFaceSection';
import { CapturePageFlowStage, ICapturePageWorkflow } from './types';
import { CapturePageWorkflowContext } from './CapturePageWorkflowContext';
import { CaptureDocumentFrontSection } from './CaptureDocumentFrontSection';
import { CaptureDocumentBackSection } from './CaptureDocumentBackSection'
import { CaptureReview } from './CaptureReview';

const CapturePageSection: React.FC = () => {
  const {workflow} = useContext(CapturePageWorkflowContext);  
  
  const SelectedSection = ((stage: CapturePageFlowStage) => {
    switch (stage) {
      case CapturePageFlowStage.ID_FRONT:
        return CaptureDocumentFrontSection;

      case CapturePageFlowStage.ID_BACK:
        return CaptureDocumentBackSection;

      case CapturePageFlowStage.FINISH:
        return CaptureReview;
      case CapturePageFlowStage.FACE:
      default:
        return CaptureFaceSection;     
    }
  })(workflow.stage)

  return (
    <SelectedSection />
  )
}

export const CapturePage: React.FC = () => {
  const [workflow, setWorkflow] = React.useState<ICapturePageWorkflow>({stage: CapturePageFlowStage.FACE});
  return (
    <CapturePageWorkflowContext.Provider value={{workflow, setWorkflow}} >
      <CapturePageSection />
    </CapturePageWorkflowContext.Provider>
  )
}