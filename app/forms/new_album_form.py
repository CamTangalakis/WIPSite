from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class NewAlbumForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    projectId = IntegerField('projectId', validators=[DataRequired()])
    photo = StringField('photo', validators=[DataRequired()])
