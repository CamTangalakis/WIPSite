from flask import Blueprint, jsonify, request

from app.models import db, Album

from .auth_routes import validation_errors_to_error_messages

album_routes = Blueprint('albums', __name__)

@album_routes.route('/')
def get_albums():
    albums = Album.query.all()
    return {'albums': [album.to_dict() for album in albums]}
