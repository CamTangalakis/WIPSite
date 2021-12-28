from re import search
from flask import Blueprint, jsonify
from app.models import db, Project
from .auth_routes import validation_errors_to_error_messages

search_routes = Blueprint('search', __name__)


def searchResults(term):
    nameResults = Project.query.filter(
        Project.title.ilike(f"%{term}%")).all()
    tagResults = Project.query.filter(
        Project.tags.ilike(f"%{term}%")).all()
    searchSet = set(nameResults)
    for i in tagResults: searchSet.add(i)

    return list(searchSet)

@search_routes.route('/<term>/')
def get_search(term):
    search = searchResults(term)
    for i in search: print(i.to_dict())

    return {'search': [project.to_dict() for project in search]}
