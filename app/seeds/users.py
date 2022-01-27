from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    damon = User(
        username='Damonic', email='demo@gmail.com', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    maxine = User(
        username='maxamillions', email='marn@gmail.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    bobbieman = User(
        username='bobbieboobie', email='bobby@theman.com', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    alexander = User(
        username='alextheok', email='demkdfso@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    justincase = User(
        username='JustMan', email='manofthepeople@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    carmensandiego = User(
        username='foundher', email='whereintheworld@aa.io', password='password', profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(damon)
    db.session.add(maxine)
    db.session.add(bobbieman)
    db.session.add(alexander)
    db.session.add(justincase)
    db.session.add(carmensandiego)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
