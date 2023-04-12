import re
# import skops.io as sio
from flask import Flask, render_template, request, jsonify, session
import pickle
from sklearn.preprocessing import StandardScaler
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User
import doc_detail_extract as dde


app = Flask(__name__)
app.config.from_object(ApplicationConfig)
model_1 = pickle.load(open('C:\\Users\\pravi\\OneDrive\\Desktop\\mhcreact\\my\\flask-server\\random_forest_regression_model.pkl', 'rb'))

# app = Flask(__name__)
# app.config.from_object(ApplicationConfig)
model_2 = pickle.load(open('C:\\Users\\pravi\\OneDrive\\Desktop\\mhcreact\\my\\flask-server\\regression_model.pkl', 'rb'))

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)


with app.app_context():
    db.create_all()


@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]
    # name = request.json["name"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        # "name": new_user.name
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"




@app.route('/doc', methods=['POST'])
def process_district():
  selected_district = request.json['selectedDistrict']
  # do something with selected_district
#   return jsonify(selected_district)
    # print(dde.json_file(data))
  return dde.json_file(place=selected_district)


standard_to = StandardScaler()
@app.route('/response21', methods=['GET','POST'])
def handle_response21():
    dic ={}
    data = request.get_json()
    # print(data)
    # do something with the form data
    wind_down = int(data['wind_down'])
    dryness_mouth = int(data['dryness_mouth'])
    no_positive_feeling = int(data['no_positive_feeling'])
    breathing_difficulty = int(data['breathing_difficulty'])
    difficult_to_work = int(data['difficult_to_work'])
    over_react = int(data['over_react'])
    trembling = int(data['trembling'])
    use_nervous_energy = int(data['use_nervous_energy'])
    panic = int(data['panic'])
    nothing_look_forward = 0
    agitated = 0
    difficult_relax = 0
    blue = 0
    intolerant = 1
    close_panic = 0
    unable_enthusiatic = 1
    not_worth_person = 1
    touchy = 1
    action_of_heart_abs = 1
    scared_no_reason = 1
    life_meaningless = 0

    prediction=model_1.predict([[wind_down, dryness_mouth, no_positive_feeling,breathing_difficulty,
    difficult_to_work, over_react, trembling,use_nervous_energy, panic, nothing_look_forward,
    agitated,difficult_relax, blue, intolerant, close_panic,unable_enthusiatic, not_worth_person,
    touchy,action_of_heart_abs, scared_no_reason, life_meaningless]])
    output=prediction[0]*100
    print(output)
    dic['output'] = output
    return dic




# standard_to = StandardScaler()
@app.route('/response9', methods=['GET','POST'])
def handle_response9():
    dic ={}
    data = request.get_json()
    # print(data)
    # do something with the form data
    pleasure = int(data['pleasure'])
    Feeling = int(data['Feeling'])
    Trouble = int(data['Trouble'])
    tired = int(data['tired'])
    Poor = int(data['Poor'])
    Feeling_bad = int(data['Feeling_bad'])
    concentrating = int(data['concentrating'])
    Moving = int(data['Moving'])
    Thoughts= int(data['Thoughts'])
       
    prediction=model_2.predict([[pleasure,Feeling,Trouble,tired,
    Poor,Feeling_bad,concentrating,Moving,Thoughts]])
    output=prediction[0]*100
    print(output)
    dic['output'] = output
    return dic


if __name__ == "__main__":
    app.run(debug=True)
