from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class NewPostForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    projectId = IntegerField('projectId', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
