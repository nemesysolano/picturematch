import React from "react";
import { CapturePageFlowStage, ICapturePageWorkflowContext } from "./types";  
export const ONBOARDING_STORAGE_KEY = 'face';
export const CapturePageWorkflowContext = React.createContext<ICapturePageWorkflowContext>({
    workflow: {stage: CapturePageFlowStage.FACE},
    setWorkflow: () => {}
});
