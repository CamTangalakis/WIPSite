from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'))
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    photo = db.Column(db.String)

    project = db.relationship('Project', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'photo': self.photo,
            'projectId': self.projectId
        }
