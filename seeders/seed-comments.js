const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    let comment2 = await db.Comment.create({
        author: 'Rabid Robert',
        rant: true,
        stars: 0.0,
        content: 'NEVER EAT HERE. THE PLACE STINKS. FIGURATIVELY AND LITERALLY. THE FOOD IS HORRIBLE, THE SERVICE EVEN WORSE, AND THE ATMOSPHERE ABYSMAL. I ASKED FOR MY STEAK MEDIUM RARE. MEDIUM. RARE! AND IT CAME OUT MEDIUM! UNACCEPTABLE!!!!'
    })

    let comment3 = await db.Comment.create({
        author: 'Sad Samantha',
        rant: false,
        stars: 3.5,
        content: 'I truly wanted to love this place, but I was sadly let down. The service was fine and the food was average, but for the reputation it has, I expected much better...disappointed to say the least.'
    })
    

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place.comments.push(comment2.id)
    place.comments.push(comment3.id)
    
    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
