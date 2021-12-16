from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class NewFavForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    projectId = IntegerField('projectId', validators=[DataRequired()])
