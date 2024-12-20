"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPipeFaceDetectorTfjs = exports.MediaPipeFaceDetectorMediaPipe = exports.createDetector = void 0;
var create_detector_1 = require("./create_detector");
Object.defineProperty(exports, "createDetector", { enumerable: true, get: function () { return create_detector_1.createDetector; } });
var detector_1 = require("./mediapipe/detector");
Object.defineProperty(exports, "MediaPipeFaceDetectorMediaPipe", { enumerable: true, get: function () { return detector_1.MediaPipeFaceDetectorMediaPipe; } });
var detector_2 = require("./tfjs/detector");
Object.defineProperty(exports, "MediaPipeFaceDetectorTfjs", { enumerable: true, get: function () { return detector_2.MediaPipeFaceDetectorTfjs; } });
// Supported models enum.
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map