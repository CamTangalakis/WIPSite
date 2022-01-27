from app.models import db, Comment

def seed_comments():
    comment1 = Comment(userId=1,projectId=1, content='This is a great idea!')
    comment2 = Comment(userId=2,projectId=2, content='This is a great idea!')
    comment3 = Comment(userId=2,projectId=2, content='Great Project!')
    comment4 = Comment(userId=3,projectId=3, content='Great Project!')
    comment5 = Comment(userId=3,projectId=4, content='Great Project!')
    comment6 = Comment(userId=3,projectId=5, content='I\'ve got to try this!')
    comment7 = Comment(userId=4,projectId=6, content='I\'ve got to try this!')
    comment8 = Comment(userId=4,projectId=7, content='I\'ve got to try this!')
    comment9 = Comment(userId=4,projectId=8, content='There\'s a better way to do this you know')
    comment10 = Comment(userId=5,projectId=9, content='There\'s a better way to do this you know')
    comment11 = Comment(userId=5,projectId=10, content='There\'s a better way to do this you know')
    comment12 = Comment(userId=5,projectId=11, content='I love this!')

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comment RESTART IDENTITY CASCADE;')
    db.session.commit()
