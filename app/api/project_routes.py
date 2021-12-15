from flask import Blueprint, jsonify, request

from app.models import db, Project, Comment, Favorite
from app.forms import NewProjectForm, EditProjectForm, NewCommentForm, EditCommentForm, NewFavForm

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
                            description=form.data['description'])
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
        project.categoryId = form.data['categoryId']
        project.tags = form.data['tags']
        project.description = form.data['description']

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

@project_routes.route('/<int:projectId>/favorites/', methods=['POST'])
def post_fav(projectId, userId):
    form = NewFavForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        fav = Favorite(userId=userId, projectId=projectId)
        db.session.add(fav)
        db.session.commit()
        return fav.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>/favorites/<int:favId>', methods=['DELETE'])
def delete_fav(id, favId):
    fav = Favorite.query.get(int(favId))
    db.session.delete(fav)
    db.session.commit()
    return {'message': 'Favorite Deleted!'}
