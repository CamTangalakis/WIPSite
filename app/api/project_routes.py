from flask import Blueprint, jsonify, request

from app.models import db, Project, Comment
from app.forms import NewProjectForm, EditProjectForm

from .auth_routes import validation_errors_to_error_messages

project_routes = Blueprint('projects', __name__)

@project_routes.route('/')
def projects():
    projects = Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}

@project_routes.route('/', methods=['POST'])
def post_project():
    form = NewProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newProject = Project(title=form.data['title'], categoryId=form.data['categoryId'],
                            userId=form.data['userId'], albumId=form.data['albumId'],
                            tags=form.data['tags'], description=form.data['description'])
        db.session.add(newProject)
        db.session.commit()
        return newProject.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:id>', method=['PUT'])
def edit_project():
    form = Edit_Project_Form()
