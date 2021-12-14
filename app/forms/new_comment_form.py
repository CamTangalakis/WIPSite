from sqlalchemy.sql.sqltypes import String
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewCommentForm(FlaskForm):
    content = StringField('content', validators=[DataRequired()])
    projectId = IntegerField('projectId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])


class EditCommentForm(FlaskForm):
    content = StringField('content', validators=[DataRequired()])
