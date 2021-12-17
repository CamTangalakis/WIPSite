from .db import db
import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    projectId = db.Column(db.Integer, db.ForeignKey('projects.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))

    createdat = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedat = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    commentUser = db.relationship('User', back_populates='commentUser')
    project = db.relationship('Project', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'projectId': self.projectId,
            'userId': self.userId,
            'createdAt': self.createdat,
            'user': self.commentUser.to_dict()
        }
