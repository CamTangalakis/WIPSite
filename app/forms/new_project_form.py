from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def lengthValidator(form, field):
    name = field.data
    if len(name) < 1:
        raise ValidationError('Fields may not be empty')

class NewProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), lengthValidator])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    tags = StringField('tags')
    description = StringField('description', validators=[DataRequired(), lengthValidator])
    coverPhoto = StringField('coverPhoto')


class EditProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), lengthValidator])
    tags = StringField('tags')
    description = StringField('description', validators=[DataRequired(), lengthValidator])
    coverPhoto = StringField('coverPhoto')
