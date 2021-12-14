from .db import db

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'))

    user = db.relationship('User', back_populates='favUser')
    project = db.relationship('Project', back_populates='favProject')
