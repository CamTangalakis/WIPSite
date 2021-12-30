from app.models import db, Project

def seed_projects():
    demo = Project(
        title='I\'m baking my first cake!',
        categoryId=1,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFGM7k1nB4eXMGvZblqg9eJoxoQaD9Vo0hA&usqp=CAU',
        tags='cake firsttime',
        description='a cool new project! I\'ve never made a cake before, so I\'m excited to try.'
    )
    demo2 = Project(
        title='Cookie Recipe',
        categoryId=1,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFGM7k1nB4eXMGvZblqg9eJoxoQaD9Vo0hA&usqp=CAU',
        tags='cookies recipe new',
        description='These are my famous cookies, passed down in my family for generations. My great grandmother would use lard, but this modern recipe uses shortening to give the cookie a soft and flexible, yet chewy texture. These are the greatest cookies you\'ll ever try!'
    )
    baking = Project(
        title='Making Bread',
        categoryId=1,
        userId=5,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFGM7k1nB4eXMGvZblqg9eJoxoQaD9Vo0hA&usqp=CAU',
        tags='cookies recipe new',
        description='This is my first time ever trying to make bread, and it didn\'t turn out so well. I thought you could do this thing but it turned out you can\'t do that thing or everyhitng sucks. lesson learned.'
    )
    bakingsomething = Project(
        title='An Experimental Bake',
        categoryId=1,
        userId=7,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFGM7k1nB4eXMGvZblqg9eJoxoQaD9Vo0hA&usqp=CAU',
        tags='experiment furby',
        description= 'I tried to make a cool furby cake for my niece\'s birthday party, but it turned into a monster. I\'ve never been more scared for my life'
    )
    pastries = Project(
        title='My Famous Pastries',
        categoryId=1,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFGM7k1nB4eXMGvZblqg9eJoxoQaD9Vo0hA&usqp=CAU',
        tags='pastries famous recipe',
        description= 'I\'ve been perfecting these guys for years now, and nothing comes close to the delicious smell of homemade puff pastry as it comes out of the over. These little pastries are a labor of love. They take a couple of days to produce, so I only make them for special occasions, but they are so worth it. You\'ll never want to eat any other pastries after you\'ve had these.'
    )
    greenhouse = Project(
        title='Building a Greenhouse',
        categoryId=2,
        userId=2,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='greenhouse plants building',
        description= 'I am planning on making this greenhouse for my girlfriend, who loves to grow plants in her garden. In the winter, it gets too cold for them and she has to move all of them inside, but she has hundreds of plants and there\'s no room in the house anymore. So I\'m building this for her for Hannukah. I hope she loves it. I\'ll be documenting the progress over the next couple of weeks.'
    )
    doghouse = Project(
        title='Building a Dog House',
        categoryId=2,
        userId=4,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='dog doghouse building',
        description= 'My dog is always getting into the mud outside so I need a way to keep him happy and warm but not trample mud all over the house. Does nayone have experience building this kind of thing? This will be my first time picking up power tools.'
    )
    houses = Project(
        title='Building Houses',
        categoryId=2,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='houses community building',
        description= 'My family have been long time supporters of habitat for humanity, and I\'m proud to say we\'ve leanred a lot from the experiences we\'ve had. So now we\'re planning on building our own small house on a plot of land that has been abandoned for a long time. My wife is afraid of the ghosts that haunt the plot, but they\'ve been dead for years. '
    )
    house = Project(
        title='Building Houses',
        categoryId=2,
        userId=8,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='houses building',
        description= 'Carpentry runs in my family, but this will be the first time I\'ve built a house completely on my own terms. I\'ve hired a lot of people to help me, but this will be a huge undertaking for me and my family.'
    )
    houseagain = Project(
        title='first house project',
        categoryId=2,
        userId=8,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='houses building',
        description= 'Carpentry runs in my family, but this will be the first time I\'ve built a house completely on my own terms. I\'ve hired a lot of people to help me, but this will be a huge undertaking for me and my family.'
    )
    househouse = Project(
        title='Building a house',
        categoryId=2,
        userId=8,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-OrFyS2kA8xDnrbM-AGSuhpEkp4s9wCPOQ&usqp=CAU',
        tags='houses building',
        description= 'I\'ve hired a lot of people to help me, but this will be a huge undertaking to build this house.'
    )
    ceramics = Project(
        title='my first pot',
        categoryId=3,
        userId=2,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='pot ceramics firsttime',
        description= 'I\'ve never made anything like this before, and though it\'s really ugly, I\'m so proud of how it turned out. I\'m going to be doing so much more ceramics works over the next weeks and hopefull I\'ll get really good.'
    )
    ceramics2 = Project(
        title='Making Cool Pots',
        categoryId=3,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='pot ceramics bowls pottery',
        description= 'My local pottery place is giving lessons on throwing ceramics, and they\'ll fire and glaze it all for you! I have some experience with pottery making, but it seems like a great wat to get into it.'
    )
    ceramics3 = Project(
        title='Local Throwing Class',
        categoryId=3,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='pot ceramics bowls',
        description= 'I\'ve gotten really good at making bowls and pots over the last couple of weeks. These are some of the best ones that I\'ve made. I\'ll be selling them at my local farmer\'s market this sunday.'
    )
    ceramics4 = Project(
        title='Making Ceramics',
        categoryId=3,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='pots ceramics pottery throwing',
        description= 'One of the most relaxing thing to do with your day is to sit at the throwing wheel and make something from scratch. Turning nothing into something is really rewarding.'
    )
    ceramics5 = Project(
        title='First Time Pottery',
        categoryId=3,
        userId=7,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='pots pottery throwing',
        description= 'My first time making ceramics was at this whole in the wall throwing class, and I made this cool container that I still use to hold umbrellas at my front door. I\'m so proud of it to this day.'
    )
    ceramics6 = Project(
        title='Plates and Stuff',
        categoryId=3,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-Z-QpagAutbaCHdagJDt20HhtWaCgp4qYw&usqp=CAU',
        tags='plates pottery throwing',
        description= 'The first time I ever made something on the potting wheel, it was a disaster. I\'m proud to say that six years later, I\'ve opened my own business and teach lessons on how to throw beautiful pieces that you\'ll want to share with all of your friends.'
    )
    coding1 = Project(
        title='My First Site',
        categoryId=4,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'I\'m making my first professional website after teaching myself for the last year and a half. I finally got hired at a small tech company and now I can do what I love for the rest of my life.'
    )
    coding2 = Project(
        title='My Second Site',
        categoryId=4,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'This is going to be the second site I\'m going to present to sell to investors. I need some perspective on how to complete it. What looks better?'
    )
    coding3 = Project(
        title='Software Engineer',
        categoryId=4,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'I want to be a software engineer, but I don\'t know where to start. I know the basics of coding, but what are the next steps?'
    )
    coding4 = Project(
        title='I want to be in the software industry',
        categoryId=4,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'I\'m working on this new project, and I\'m very excited about working on it, but the next steps are escaping me. How do I go about doing this specific thing to make everything look perfect and professional and like I spent so much time on it?'
    )
    coding5 = Project(
        title='What\'s next?',
        categoryId=4,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'Working on this new site. I hope it turns out well!'
    )
    coding6 = Project(
        title='New site!',
        categoryId=4,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDoO_HJShD-ySKl9i2Rqym6uqgIlud7o0A&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'Working on this new site. I hope it turns out well!'
    )
    cooking1 = Project(
        title='Beef Wellington',
        categoryId=5,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='beef wellington british dinner',
        description= 'Apparently beef wellington is one of the hardest things to make, but I really wanted to challenge myself by making it. I used the Gordon Ramsay recipe, and read it back to front at least five times. When I started making it, I was intimidated but ready to go. I did not anticipate how badly it would turn out.'
    )
    cooking2 = Project(
        title='Making Every Type of Pasta',
        categoryId=5,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='pasta dinner cooking french eggs',
        description='I challenged myself to a pasta making challenge, and used a big batch of pasta dough to make as many different pasta types as possible. Shaping the pasta in different ways is a fun and creative way to get different flavors and textures from your meal!'
    )
    cooking3 = Project(
        title='I Bought a Wok!',
        categoryId=5,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='asian chinese wok equipment',
        description='I love Asian cooking, and I recently invested in a wok and a fire pit to cook over. Now all I need to do is find as many delicious recipes and fresh ingredients to try!'
    )
    cooking4 = Project(
        title='Cooking With Children',
        categoryId=5,
        userId=5,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='children projects kids',
        description='I have several young children, and I love to cook. I want to be able to incorporate them into my daily cooking routine, but it\'s hard to have young children around dangerous kitchen equipment. I will undertake several cooking projects while keeping children\'s abilities in mind.'
    )
    cooking5 = Project(
        title='Breakfast',
        categoryId=5,
        userId=7,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='breakfast challenge',
        description= 'I\'m challenging myself by making breakfast every day this week. I bought great ingredients and seven amazing recipes to get me through.'
    )
    cooking6 = Project(
        title='Flipping Technique',
        categoryId=5,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg2hmhCDST5jU_KfOUvdBkN-zrln8q7mYoA&usqp=CAU',
        tags='technique',
        description= 'Whenever you see professional chefs on TV, they do that pan flipping technique. I\'ve decided to learn what that is and how to do it, and will see if it makes any difference in the overall efficiency and quality of the meal.'
    )
    crafts1 = Project(
        title='Beading and Jewelry',
        categoryId=6,
        userId=2,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2llM6NpPyn6fZQfMOGQA6QENr20QKSaTdzA&usqp=CAU',
        tags='beads jewelry necklaces bracelets',
        description= 'I love jewelry, but it is always really expensive. Now I want to make my own jewelry, and make the kind of stuff that I like to wear.'
    )
    crafts2 = Project(
        title='Paper Art',
        categoryId=6,
        userId=4,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2llM6NpPyn6fZQfMOGQA6QENr20QKSaTdzA&usqp=CAU',
        tags='paper crafts art',
        description= 'Paper is an incredibly versatile product, and you can use it to make some beautiful pieces. I\'m going through several projects to see how much you can manipulate paper to make gorgeous pieces of art.'
    )
    crafts3 = Project(
        title='Party Invitations',
        categoryId=6,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2llM6NpPyn6fZQfMOGQA6QENr20QKSaTdzA&usqp=CAU',
        tags='party invitations',
        description= 'My sister is getting married in five months, and I\'ve been chosen to make the invitations. I know my sister is picky, but I also know what she likes and have a good idea for what I\'m going to make her. I\'m excited for the way I hope they\'re going to turn out.'
    )
    crafts4 = Project(
        title='Fortnite Cosplay',
        categoryId=6,
        userId=8,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPux4NX8NtfR65_rcgYYQjQMQBh87wpklsg&usqp=CAU',
        tags='cosplay fotnite convention',
        description= 'I\'m going to a big convention in a couple of weeks, and I want to make my own armor pieces. I have the plans and designs for some really cool looking gauntlets, and I\'m excited to get working on them.'
    )
    crafts5 = Project(
        title='resin jewelry',
        categoryId=6,
        userId=8,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2llM6NpPyn6fZQfMOGQA6QENr20QKSaTdzA&usqp=CAU',
        tags='resin jewelry',
        description= 'I love making jewelry, and I want others to know how fun and rewarding making your own beautiful pieces can be. I\'m going to demonstrate how to make five different types of shapes and sizes, with differing effects and colors.'
    )
    crafts6 = Project(
        title='Origami',
        categoryId=6,
        userId=8,
        coverPhoto='https://creativityintherapy.com/wp-content/uploads/2012/07/Origami-crane.jpg',
        tags='paper folding origami',
        description= 'The craft of paper folding has existed in Japan for thousands of years, and is one of the oldest forms of crafting. There are thousands of different shapes, animals, and objects you can make, and if you understand the craft, you can make your own designs, too! Paper folding is so fun, and can range from easy beginner folds to advanced and master-level projects.'
    )
    gardening1 = Project(
        title='Gardening With Kids',
        categoryId=7,
        userId=2,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCqT0OTQXKU0zLOIjZ6ia1At2VUzvCFeAAg&usqp=CAU',
        tags='kids children veggie garden',
        description= 'I want to get more vegetables in my kids\' diets, but I also want to teach them about the life cycle of plants, and how to sustain yourself with your hands. The garden is going to be a fun family project that I hope will engage my children with the outside world, and provide us a great way to provide for ourselves.'
    )
    gardening2 = Project(
        title='Elderly Gardeners',
        categoryId=7,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCqT0OTQXKU0zLOIjZ6ia1At2VUzvCFeAAg&usqp=CAU',
        tags='elders mothers day',
        description= 'My mother has always had a passionate love for her garden, but her 60th birthday just passed and she can no longer move around her garden like the once did. For mother\'s day, I am going to be retrofitting her garden with rails, stools, and padding to make gardening a more comfortable activity for her.'
    )
    gardening3 = Project(
        title='Beautiful Flowers Year Round',
        categoryId=7,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBnnJ5lz6T0VrvhA79eky9d8Pa3_TRGF2og&usqp=CAU',
        tags='flowers perennials garden',
        description= 'There are so many beautiful flowers that only bloom for short periods of time during the year, but I like to keep my garden looking beautiful year round. These are some beautiful flowers that thrive in different times of the year, and make sure your garden always has something new to look at.'
    )
    gardening4 = Project(
        title='Community Garden',
        categoryId=7,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEwHgia2ekYbIVVpspyY7WegCgczoGxCe_Q&usqp=CAU',
        tags='community garden project veggies',
        description= 'I am starting a community garden in my local park! We just got the last permits signed and now all we have to do it build the thing! This weekend, a team of volunteers are going to build a new garden from the ground up, and hopefully be able to support the wellbeing of our community.'
    )
    gardening5 = Project(
        title='Indoor Plants',
        categoryId=7,
        userId=7,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCqT0OTQXKU0zLOIjZ6ia1At2VUzvCFeAAg&usqp=CAU',
        tags='plants indoor pots monstera',
        description= 'I have had plants for a long time now, but I haven\'t been able to find a way to make them thrive. I got grow lights and I keep as good an eye on them as I have time to, but there has to be a better way to take care of my plant babies.'
    )
    gardening6 = Project(
        title='Garden Pest Control',
        categoryId=7,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCqT0OTQXKU0zLOIjZ6ia1At2VUzvCFeAAg&usqp=CAU',
        tags='pest control garden veggies',
        description= 'There are many benefits of a veggie garden, but the increase in pests is not one of them. Here are some great ways to keep pests from your house and away from your garden!'
    )
    painting1 = Project(
        title='Painting My House',
        categoryId=8,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='house new paint project',
        description= 'I\'m painting my house'
    )
    painting2 = Project(
        title='Painting',
        categoryId=8,
        userId=1,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'Painting'
    )
    painting3 = Project(
        title='Painting',
        categoryId=8,
        userId=3,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'painting'
    )
    painting4 = Project(
        title='Pait',
        categoryId=8,
        userId=6,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'painting'
    )
    painting5 = Project(
        title='Paint',
        categoryId=8,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'paint'
    )
    painting6 = Project(
        title='Paint',
        categoryId=8,
        userId=9,
        coverPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrS0rRaOsWqAyDyi4UuMuQ6dOGGK0fO1JrGg&usqp=CAU',
        tags='coding website softwareengineering',
        description= 'painting'
    )
    textiles1 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )
    textiles2 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )
    textiles3 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )
    textiles4 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )
    textiles5 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )
    textiles6 = Project(
        title='Sewing',
        categoryId=9,
        userId=9,
        coverPhoto='https://www.materialsource.co.uk/uploads/articles/c4/c4ec80be84301e193527df0b91185ffe63b91c11_1100.jpg',
        tags='coding website softwareengineering',
        description= 'textiles'
    )

    db.session.add(painting1)
    db.session.add(demo)
    db.session.add(cooking5)
    db.session.add(greenhouse)
    db.session.add(coding1)
    db.session.add(ceramics)
    db.session.add(textiles1)
    db.session.add(bakingsomething)
    db.session.add(gardening2)
    db.session.add(painting2)
    db.session.add(cooking4)
    db.session.add(cooking2)
    db.session.add(pastries)
    db.session.add(gardening3)
    db.session.add(crafts4)
    db.session.add(textiles2)
    db.session.add(ceramics3)
    db.session.add(cooking6)
    db.session.add(painting3)
    db.session.add(house)
    db.session.add(coding5)
    db.session.add(crafts6)
    db.session.add(baking)
    db.session.add(cooking1)
    db.session.add(textiles3)
    db.session.add(ceramics5)
    db.session.add(textiles6)
    db.session.add(crafts1)
    db.session.add(coding2)
    db.session.add(houses)
    db.session.add(ceramics4)
    db.session.add(gardening4)
    db.session.add(painting4)
    db.session.add(demo2)
    db.session.add(textiles4)
    db.session.add(ceramics2)
    db.session.add(gardening5)
    db.session.add(coding4)
    db.session.add(painting5)
    db.session.add(houseagain)
    db.session.add(ceramics6)
    db.session.add(crafts3)
    db.session.add(gardening1)
    db.session.add(coding3)
    db.session.add(doghouse)
    db.session.add(textiles5)
    db.session.add(househouse)
    db.session.add(coding6)
    db.session.add(cooking3)
    db.session.add(painting6)
    db.session.add(crafts5)
    db.session.add(crafts2)
    db.session.add(gardening6)
    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
