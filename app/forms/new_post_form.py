from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class NewPostForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    photo = StringField('photo', validators=[DataRequired()])
