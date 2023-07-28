from app import app
from .models import Clue, Category
from flask import render_template
import requests

@app.route('/')
def home():
    response = requests.get("http://jservice.io/api/category?id=28012")
    if response.ok:
        data = response.json()

        #category = Category(
        #    category_name=data['title'],
        #    category_id=data['id']
        #)
        #category.save_category()

        if data['clues'][0]['value'] == 999:
            clue = Clue(
                answer=data['clues'][0]['answer'],
                question=data['clues'][0]['question'],
                value=data['clues'][0]['value'],             
                category_id=data['clues'][0]['category_id']               
            )
            clue.save_question()
        
    return render_template ('index.html')

@app.get('/quiz')
def get_game_data():
    questions = Clue.query.all()
    categories = Category.query.all()
    q_list = [q.to_dict() for q in questions]
    c_list = [c.to_dict() for c in categories]
    return {
        'status' : 'ok',
        'question_list' : q_list,
        'category_list' : c_list
    }