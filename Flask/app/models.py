from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Clue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String)
    question = db.Column(db.String)
    value = db.Column(db.Integer)
    category_id = db.Column(db.Integer)

    def save_question(self):
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        return {
            'id' :  self.id,
            'answer' : self.answer,
            'question' : self.question,
            'value' : self.value,
            'category_id' : self.category_id
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String)
    category_id = db.Column(db.Integer)

    def save_category(self):
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        return {
            'id' : self.id,
            'category_name' : self.category_name,
            'category_id' : self.category_id
        }
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def save_user(self):
        db.session.add(self)
        db.session.commit()