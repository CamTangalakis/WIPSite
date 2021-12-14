from app.models import category, db, Category

def seed_categories():
    baking = Category(category='baking')
    carpentry = Category(category='carpentry')
    ceramics = Category(category='ceramics')
    coding = Category(category='coding')
    cooking = Category(category='cooking')
    crafts = Category(category='crafts')
    gardening = Category(category='gardening')
    painting = Category(category='painting')
    textiles = Category(category='textiles')
    woodworking = Category(category='woodworking')
    writing = Category(category='writing')


    db.session.add(baking)
    db.session.add(carpentry)
    db.session.add(ceramics)
    db.session.add(coding)
    db.session.add(cooking)
    db.session.add(crafts)
    db.session.add(gardening)
    db.session.add(painting)
    db.session.add(textiles)
    db.session.add(woodworking)
    db.session.add(writing)
    
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
