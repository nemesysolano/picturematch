export enum CapturePageFlowStage {
    FACE,
    ID_FRONT,
    ID_BACK,
    FINISH
}

export type ICapturePageWorkflow = {
    stage: CapturePageFlowStage;    
    
}
export type ICapturePageWorkflowContext = {
    workflow: ICapturePageWorkflow;    
    setWorkflow: (workflow: ICapturePageWorkflow) => void;
}


