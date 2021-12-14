from app.models import db, Project

def seed_projects():
    demo = Project(
        title='New Project',
        categoryId=1,
        userId=1,
        tags='newproject tag tags',
        description='a cool new project! I love working on this project!'
    )

    db.session.add(demo)
    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
