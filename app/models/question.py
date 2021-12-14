from .db import db

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, prmary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    projectId = db.Column(db.Integer, ForeignKey=True)
    userId = db.Column(db.Integer, ForeignKey=True)

    questionUser = db.relationship('User', back_populates='questionUser')
    project = db.relationship('Project', back_populates='questions')
