from .db import db
import datetime

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    tags = db.Column(db.String)
    description = db.Column(db.String)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='projectUser')
    category = db.relationship('Category', back_populates='projectCategory')
    album = db.relationship('Album', back_populates='projectPics', cascade="all, delete-orphan")
    comments = db.relationship('Comment', back_populates='project', cascade="all, delete-orphan")
    favorites = db.relationship('Favorite', back_populates='project', cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'categoryId': self.categoryId,
            'userId': self.userId,
            'tags': self.tags,
            'description': self.description,
            'comments': {obj.id: {'content': obj.content} for obj in self.comments},
            'photos': [{'photo': obj.photo} for obj in self.album],
            'user': self.user.to_dict(),
            'createdAt': self.createdAt
        }
