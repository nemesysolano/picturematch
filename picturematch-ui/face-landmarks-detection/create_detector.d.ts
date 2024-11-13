/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { FaceLandmarksDetector } from './face_landmarks_detector';
import { MediaPipeFaceMeshMediaPipeModelConfig } from './mediapipe/types';
import { MediaPipeFaceMeshTfjsModelConfig } from './tfjs/types';
import { SupportedModels } from './types';
/**
 * Create a face detector instance.
 *
 * @param model The name of the pipeline to load.
 * @param modelConfig The configuration for the pipeline to load.
 */
export declare function createDetector(model: SupportedModels, modelConfig?: MediaPipeFaceMeshMediaPipeModelConfig | MediaPipeFaceMeshTfjsModelConfig): Promise<FaceLandmarksDetector>;
