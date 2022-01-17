from .db import db
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    coverPhoto = db.Column(db.String(10000))

    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    project = db.relationship('Project', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'projectId': self.projectId,
            'coverPhoto': self.coverPhoto,
            'createdAt': self.createdAt,
        }
