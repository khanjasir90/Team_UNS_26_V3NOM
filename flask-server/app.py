from flask import Flask,request,jsonify
import numpy as np
import os
import cv2
from werkzeug.utils import secure_filename
import pickle
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model
from flask_cors import CORS, cross_origin

model = pickle.load(open("crop_recommendation.pkl", "rb"))

disease_model = load_model('plant_disease_detection.h5')

plant_list = ['apple', 'banana', 'blackgram', 'chickpea', 'coconut', 'coffee',
       'cotton', 'grapes', 'jute', 'kidneybeans', 'lentil', 'maize', 'mango',
       'mothbeans', 'mungbean', 'muskmelon', 'orange', 'papaya', 'pigeonpeas',
       'pomegranate', 'rice', 'watermelon']

plant_disease_class = ['Apple-scab :https://www2.ipm.ucanr.edu/agriculture/apple/Apple-scab/', 
    'Apple-Black-rot :https://extension.umn.edu/plant-diseases/black-rot-apple#prune-correctly-1767010', 
    'Apple-Cedar-Rust :https://www.planetnatural.com/pest-problem-solver/plant-disease/cedar-apple-rust/', 
    'Apple-healthy :None', 'Blueberry-healthy :None', 
    'Cherry-Powdery-mildew :https://www2.ipm.ucanr.edu/agriculture/cherry/Powdery-Mildew/ ', 
    'Cherry-healthy :None', 
    'Corn-Cercospora-leaf-spot :https://www.pioneer.com/us/agronomy/gray_leaf_spot_cropfocus.html ', 
    'Corn-Common-rust :http://ipm.ucanr.edu/PMG/r113100811.html', 
    'Corn-Northern-Leaf-Blight :https://www.extension.purdue.edu/extmedia/bp/bp-84-w.pdf', 
    'Corn-healthy :None',
    'Grape-Black-rot: https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/pests-and-problems/diseases/fruit-spots/black-rot-of-grapes.aspx', 
    'Grape-Black-Measles :https://www2.ipm.ucanr.edu/agriculture/grape/esca-black-measles/',
    'Grape-Leaf-blight_(Isariopsis_Leaf_Spot) :https://www.sciencedirect.com/science/article/abs/pii/S0261219414001598',
    'Grape-healthy:None', 
    'Orange-Haunglongbing-(Citrus_greening) :https://www.aphis.usda.gov/aphis/resources/pests-diseases/hungry-pests/the-threat/citrus-greening/citrus-greening-hp', 
    'Peach-Bacterial-spot ', 'Peach-healthy',
    'Pepper-bell-Bacterial-spot', 'Pepper-bell-healthy', 
    'Potato-Early-blight :https://www.ag.ndsu.edu/publications/crops/early-blight-in-potato', 
    'Potato-Late-blight :https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Pages/LateBlight.aspx', 
    'Potato-healthy :None', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 
    'Strawberry-Leaf-scorch : https://content.ces.ncsu.edu/leaf-scorch-of-strawberry', 
    'Strawberry-healthy :None', 'Tomato-Bacterial-spot :https://hort.extension.wisc.edu/articles/bacterial-spot-of-tomato/',
    'Tomato-Early-blight :https://extension.umn.edu/diseases/early-blight-tomato',
    'Tomato-Late-blight :https://content.ces.ncsu.edu/tomato-late-blight', 
    'Tomato-Leaf-Mold :https://www.canr.msu.edu/news/tomato-leaf-mold-in-hoophouse-tomatoes',
    'Tomato-Septoria-leaf-spot :https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/pests-and-problems/diseases/fungal-spots/septoria-leaf-spot-of-tomato.aspx', 
    'Tomato-Spider-mites(Two-spotted_spider_mite) :https://pnwhandbooks.org/insect/vegetable/vegetable-pests/hosts-pests/tomato-spider-mite',
    'Tomato-Target-Spot :https://apps.lucidcentral.org/pppw_v10/text/web_full/entities/tomato_target_spot_163.htm', 
    'Tomato-Yellow-Leaf-Curl-Virus :https://www2.ipm.ucanr.edu/agriculture/tomato/tomato-yellow-leaf-curl/', 
    'Tomato-mosaic-virus :https://extension.umn.edu/disease-management/tomato-viruses', 'Tomato-healthy :None']

app = Flask(__name__)

CORS(app)

UPLOAD_FOLDER = './images/'
ALLOWED_EXTENSIONS = set(['jpg','jpeg','png'])

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def hello():
    return "<p>Machine Learning</p>"


@app.route("/recommendCrop",methods=['POST'])
@cross_origin()
def recommendCrop():
    data = request.get_json()
    print(data)
    X = np.array(list(data.values())).reshape(1, -1)
    print(X.shape)
    #X_scaled = scaler.transform(X)
    predictions = model.predict(X).tolist()
    plant_pred = dict() 
    plant_pred['cropName'] = plant_list[predictions[0]]
    return jsonify(plant_pred)

@app.route("/diseasePredict",methods=['POST'])
@cross_origin()
def diseasePredict():
    file = request.files['image']
    filename = secure_filename(file.filename)
    print(filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))

    #Load Image
    image = cv2.imread(os.path.join(app.config['UPLOAD_FOLDER'],filename))
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    input_shape = (224,224)
    image = cv2.resize(image,input_shape,interpolation=cv2.INTER_NEAREST)
    image = np.array(image)/255
    x = np.expand_dims(image,axis=0)
    arr = disease_model.predict(x)[0]
    y = np.argmax(arr,axis=0)
    class_val = plant_disease_class[y]
    confidence = arr[y]
    json_output = dict()
    json_output['disease'] = str(class_val)
    json_output['confidence'] = str(confidence)
    return jsonify(json_output)


if __name__ == '__main__':
    app.run()
