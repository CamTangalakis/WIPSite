from flask import Blueprint, jsonify, request

from app.models import db, Album
from app.forms import NewAlbumForm

from .auth_routes import validation_errors_to_error_messages

album_routes = Blueprint('albums', __name__)

@album_routes.route('/')
def get_albums():
    albums = Album.query.all()
    return {'albums': [album.to_dict() for album in albums]}

@album_routes.route('/')
def make_album():
    form = NewAlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newAlbum = Album(userId=form.data['userId'], projectId=form.data['projectId'],
                            photo=form.data['photo'])
        db.session.add(newAlbum)
        db.session.commit()
        return newAlbum.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@album_routes.route('/<int:id>')
def del_album(id):
    album = Album.query.get(int(id))
    db.session.delete(album)
    db.session.commit()
    return {'message': 'Deleted Album'}
