from matplotlib.patches import Rectangle
from mtcnn import MTCNN
from tensorflow import keras
from keras import layers
import tensorflow as tf
import numpy as np
from os import path
import sys
import matplotlib.pyplot as plt
from PIL import Image
import cv2


# Load model from json file
def load_model_from_json(json_file):
    with open(json_file, 'r') as f:
        model = tf.keras.models.model_from_json(f.read())
    return model

# Load weights from h5 file
def load_weights(model, h5_file):
#    model.python(h5_file)
    return model

# Extract faces from filename
def extract_faces(filename):
    # Load image from file
    image = plt.imread(filename)

    # Create the detector, using default weights
    detector = MTCNN()

    # Detect faces in the image
    faces = detector.detect_faces(image)
    return (image, faces)

# Hilight faces in image
def hilight_faces(image, faces):
    plt.imshow(image)
    ax = plt.gca()

    for face in faces:
        x, y, width, height = face['box']
        face_border = Rectangle((x, y), width, height, fill=False, color='red')
        ax.add_patch(face_border)
    plt.show()

def extract_face_from_image(image, faces):
    face_images = []

    for face in faces:
        # extract the bounding box from the requested face
        x1, y1, width, height = face['box']
        x2, y2 = x1 + width, y1 + height

        # extract the face
        face_boundary = image[y1:y2, x1:x2]

        # resize pixels to the model size
        face_image = Image.fromarray(face_boundary)
        face_image = face_image.resize((160, 160))
        face_array = np.asarray(face_image)
        face_images.append(face_array)

    plt.imshow(face_images[0])
    plt.show()
    return face_images

def compare_faces(face1, face2):
    # Load model from json file
    model = load_model_from_json('facenet_keras.json')
    # Load weights from h5 file
    model = load_weights(model, 'facenet_keras.h5')

    # Normalize the image
    face1 = face1.astype('float32')
    mean, std = face1.mean(), face1.std()
    face1 = (face1 - mean) / std

    face2 = face2.astype('float32')
    mean, std = face2.mean(), face2.std()
    face2 = (face2 - mean) / std

    # Expand the dimension
    face1 = np.expand_dims(face1, axis=0)
    face2 = np.expand_dims(face2, axis=0)

    # Predict the face
    face1_embedding = model.predict(face1)
    face2_embedding = model.predict(face2)

    # Calculate the distance
    distance = np.linalg.norm(face1_embedding - face2_embedding)
    return distance

if __name__ == "__main__":
    id = sys.argv[1] 
    face_picture_file = path.join('images', id, 'face.jpeg')
    id_front_picture = path.join('images', id, 'front.jpeg')    



    (face_picture, face_picture_file_faces) = extract_faces(face_picture_file)
    (id_front_picture, id_front_picture_faces) = extract_faces(id_front_picture)
    
    hilight_faces(face_picture, face_picture_file_faces)
    hilight_faces(id_front_picture, id_front_picture_faces)

    face_images = extract_face_from_image(face_picture, face_picture_file_faces)
    id_front_images = extract_face_from_image(id_front_picture, id_front_picture_faces)
