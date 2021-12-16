from .db import db

class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'))

    user = db.relationship('User', back_populates='favUser')
    project = db.relationship('Project', back_populates='favProject')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'projectId': self.projectId
        }
