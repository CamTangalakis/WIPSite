from flask import Blueprint, jsonify, request

from app.models import db, Project, Comment, Favorite, Album, Post
from app.forms import NewProjectForm, EditProjectForm, NewCommentForm, EditCommentForm, NewFavForm, NewAlbumForm, NewPostForm, EditPostForm

from .auth_routes import validation_errors_to_error_messages

project_routes = Blueprint('projects', __name__)

@project_routes.route('/')
def get_projects():
    projects = Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}

@project_routes.route('/', methods=['POST'])
def post_project():
    form = NewProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newProject = Project(title=form.data['title'], categoryId=form.data['categoryId'],
                            userId=form.data['userId'], tags=form.data['tags'],
                            description=form.data['description'], coverPhoto=form.data['coverPhoto'])
        db.session.add(newProject)
        db.session.commit()
        return newProject.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/', methods=['PUT'])
def edit_project(id):
    form = EditProjectForm()
    project = Project.query.get(int(id))
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project.title = form.data['title']
        project.tags = form.data['tags']
        project.description = form.data['description']
        project.coverPhoto = form.data['coverPhoto']

        db.session.commit()
        return project.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get(int(id))
    db.session.delete(project)
    db.session.commit()
    return {'message': 'Deleted Project'}



# --------------------- comments ------------------------

@project_routes.route('/<int:id>/comments/', methods=['POST'])
def post_comments(id):
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(content=form.data['content'],
            projectId = id,
            userId = form.data['userId']
            )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/comments/<int:comId>/', methods=['PUT'])
def edit_comment(id, comId):
    form = EditCommentForm()
    comment = Comment.query.get(int(comId))
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment.content = form.data['content']
        db.session.commit()
        return comment.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/comments/<int:comId>/', methods=['DELETE'])
def delete_comment(id, comId):
    comment = Comment.query.get(int(comId))
    db.session.delete(comment)
    db.session.commit()
    return {'message': 'Comment Deleted!'}




# --------------- favorites -------------------

@project_routes.route('/favorites/')
def get_favorites():
    favs = Favorite.query.all()
    return {'favs': [fav.to_dict() for fav in favs]}

@project_routes.route('/favorites/', methods=['POST'])
def post_fav():
    form = NewFavForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(request.get_json(), '<--')
    if form.validate_on_submit():
        fav = Favorite(userId=form.data['userId'], projectId=form.data['projectId'])
        db.session.add(fav)
        db.session.commit()
        return fav.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/favorites/<int:favId>/', methods=['DELETE'])
def delete_fav(favId):
    fav = Favorite.query.get(int(favId))
    db.session.delete(fav)
    db.session.commit()
    return {'message': 'Favorite Deleted!'}

# ------------------------ posts ------------------------------

@project_routes.route('/<int:id>/posts/', methods=['POST'])
def make_post(id):
    form = NewPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post(projectId=id,
                content=form.data['content'],
                title=form.data['title'],
                coverPhoto=form.data['coverPhoto'])
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/posts/<int:postId>/', methods=['PUT'])
def edit_post(id, postId):
    form = EditPostForm()
    post = Post.query.get(int(postId))
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post.content = form.data['content']
        post.title = form.data['title']
        post.coverPhoto = form.data['coverPhoto']
        db.session.commit()
        return post.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/posts/<int:postId>/', methods=['DELETE'])
def delete_post(id, postId):
    post = Post.query.get(int(postId))
    db.session.delete(post)
    db.session.commit()
    return {'message': 'Post Deleted!'}


# ---------------- albums ---------------------

# @project_routes.route('/<int:id>/albums', methods=['POST'])
# def make_album(id):
#     form = NewAlbumForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         album = Album(userId=form.data['userId'], photo=form.data['photo'], projectId=id)
#         db.session.add(album)
#         db.session.commit()
#         return album.to_dict()
#     else:
#         return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# @project_routes.route('/<int:id>/albums/<int:albumId>', methods=['DELETE'])
# def del_album(id, albumId):
#     album = Album.query.get(int(albumId))
#     db.session.delete(album)
#     db.session.commit()
#     return {'message': 'Album Deleted!'}
