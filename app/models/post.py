from .db import db
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    photo = db.Column(db.String)
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    createdat = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedat = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    project = db.relationship('Project', backref='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'photo': self.photo,
            'projectId': self.projectId,
            'createdAt': self.createdat,
        }
