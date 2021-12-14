from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    albumId = IntegerField('albumId')
    tags = StringField('tags')
    description = StringField('description', validators=[DataRequired()])


class EditProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    albumId = IntegerField('albumId')
    tags = StringField('tags')
    description = StringField('description', validators=[DataRequired()])
