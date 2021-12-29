from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profilePic = db.Column(db.String(10000), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    albumUser = db.relationship('Album', back_populates='albumUser')
    projectUser = db.relationship('Project', back_populates='user')
    commentUser = db.relationship('Comment', back_populates='commentUser')
    favUser = db.relationship('Favorite', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    # @property
    # def username(self):
    #     return self.username

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profilePic': self.profilePic,
        }
