from matplotlib import pyplot as plt
from matplotlib.patches import Rectangle
from mtcnn.mtcnn import MTCNN
from collections import namedtuple
import sys
from os import path
from PIL import Image
from numpy import asarray
import numpy as np
import tensorflow as tf
from deepface import DeepFace

keras = tf.keras
# model_from_json = keras.models.model_from_json
# model = DeepFace.build_model("Facenet512")
# https://sefiks.com/2018/09/03/face-recognition-with-facenet-in-keras/
def l2_normalize(x):
    return x / np.sqrt(np.sum(np.multiply(x, x)))

def extract_faces(filename):
    # Load image from file
    image = plt.imread(filename)

    # Create the detector, using default weights
    detector = MTCNN()

    # Detect faces in the image
    faces = detector.detect_faces(image)
    return (image, faces)

def hilight_faces(image, faces):
    plt.imshow(image)
    ax = plt.gca()

    for face in faces:
        x, y, width, height = face['box']
        face_border = Rectangle((x, y), width, height, fill=False, color='red')
        ax.add_patch(face_border)
    plt.show()

def extract_face_from_image(image, faces, required_size=(160, 160)):
    face_images = []

    for face in faces:
        # extract the bounding box from the requested face
        x1, y1, width, height = face['box']
        x2, y2 = x1 + width, y1 + height

        # extract the face
        face_boundary = image[y1:y2, x1:x2]

        # resize pixels to the model size
        face_image = Image.fromarray(face_boundary)
        face_image = face_image.resize(required_size)
        face_array = asarray(face_image)
        face_images.append(face_array)

    return face_images

if __name__ == "__main__":
    id = sys.argv[1] 
    face_picture_file = path.join('images', id, 'face.jpeg')
    id_front_picture = path.join('images', id, 'front.jpeg')    

    (face_picture, face_picture_file_faces) = extract_faces(face_picture_file)
    (id_front_picture, id_front_picture_faces) = extract_faces(id_front_picture)
    
    hilight_faces(face_picture, face_picture_file_faces)
    hilight_faces(id_front_picture, id_front_picture_faces)

    face_images = extract_face_from_image(face_picture, face_picture_file_faces)
    print(face_images[0].shape)
    
    plt.imshow(face_images[0])
    plt.show()

    id_front_images = extract_face_from_image(id_front_picture, id_front_picture_faces)
    plt.imshow(id_front_images[0])
    plt.show()
    