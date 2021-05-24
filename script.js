const quotes = ["“Instead of wondering when your next vacation is, maybe you should set up a life you don't need to escape from.” - Seth Godin", "“Peace in the world is everybody's business, no matter where you live or what you do.” - Betty Williams", "“It’s not what you look at that matters, it’s what you see.” - Henry David Thoreau", "“Never give up. Never let things out of your control dictate who you are.” - Unknown", "“Simplicity is the ultimate sophistication.” - Leonardo Da Vinci", "“Stay Hungry. Stay Foolish.” - Steve Jobs", "“Good Artists Copy, Great Artists Steal.” - Pablo Picasso", "“Argue with idiots, and you become an idiot.” - Paul Graham", "“Be yourself; everyone else is already taken.” - Oscar Wilde", "“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela"];

document.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * quotes.length - 1)
    if (randomNumber < 0) randomNumber = 1
    let quote = quotes[randomNumber]
    console.log(randomNumber)
    document.querySelector("#quote").innerHTML = `${quote}`
})