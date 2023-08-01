from app import app
from .models import Clue, Category, User
from flask import render_template, request, jsonify
import requests, random

@app.route('/')
def home():
    response = requests.get("https://jservice.io/api/category?id=27793")
    if response.ok:
        data = response.json()

        #category = Category(
        #    category_name=data['title'],
        #    category_id=data['id']
        #)
        #category.save_category()

        #if data['clues'][4]['value'] == 1234:
        #    clue = Clue(
        #        answer=data['clues'][4]['answer'],
        #        question=data['clues'][4]['question'],
        #        value=data['clues'][4]['value'],             
        #        category_id=data['clues'][4]['category_id']               
        #    )
        #    clue.save_question()
        
    return render_template ('index.html')

@app.get('/quiz')
def get_game_data():
    questions = Clue.query.all()
    categories = Category.query.all()

    random_categories = random.sample(categories, k=6)

    q_list = [q.to_dict() for q in questions]
    c_list = [c.to_dict() for c in random_categories]
    return {
        'status' : 'ok',
        'question_list' : q_list,
        'category_list' : c_list
    }

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    confirm = data.get('confirm')

    if User.query.filter_by(username=username).first():
        return {
            'status':' NOT OK',
            'message': 'Username already exists'
            }
    
    elif password != confirm:
        return {
            'status':' NOT OK',
            'message': 'Passwords do not match'
            }

    else:
        user = User(username=username, password=password)
        user.save_user()
        return {
            'status':'OK',
            'message': 'Sign-up successful'
            }
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    user = User.query.filter_by(username=username).first()

    if user:
        if user.password == password:
            return {
                'status': 'OK',
                'message': 'Logged in!',
                'user' : user.to_dict()
            }
        else:
            return {
                'status': 'NOT OK',
                'message': 'Wrong Password',
            }
    else:
        return {
            'status': 'NOT OK',
            'message': 'Wrong Username',
        }