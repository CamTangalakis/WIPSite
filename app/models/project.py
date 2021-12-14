from .db import db
import datetime

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'))
    tags = db.Column(db.String)
    description = db.Column(db.String)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    projectUser = db.relationship('User', back_populates='projectUser')
    category = db.relationship('Category', back_populates='')
    album = db.relationship('Album', back_populates='projectPics')
    questions = db.relationship('Question', back_populates='project')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'categoryId': self.categoryId,
            'userId': self.userId,
            'albumId': self.albumId,
            'tags': self.tags,
            'description': self.description,
        }