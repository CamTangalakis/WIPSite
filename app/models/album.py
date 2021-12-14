from .db import db

class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'))

    albumUser = db.relationship('User', back_populates='albumUser')
    projectPics = db.relationship('Project', back_populates='album')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'projectId': self.projectId
        }
