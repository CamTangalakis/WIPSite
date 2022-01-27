from app.models import Favorite, db

def seed_favs():
    fav1 = Favorite(userId=1, projectId=20)
    fav2 = Favorite(userId=1, projectId=30)
    fav3 = Favorite(userId=1, projectId=10)

    db.session.add(fav1)
    db.session.add(fav2)
    db.session.add(fav3)
    db.session.commit()

def undo_favs():
    db.session.execute('TRUNCATE favorites RESTART IDENTITY CASCADE;')
    db.session.commit()
