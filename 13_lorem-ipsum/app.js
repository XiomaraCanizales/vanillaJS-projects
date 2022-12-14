const text = [
    ` I burned my life, that I might find
    A passion wholly of the mind,
    Thought divorced from eye and bone,
    Ecstasy come to breath alone.
    I broke my life, to seek relief
    From the flawed light of love and grief.`,

    `With mounting beat the utter fire
    Charred existence and desire.
    It died low, ceased its sudden thresh.
    I had found unmysterious flesh—
    Not the mind’s avid substance—still
    Passionate beyond the will.`,

    `In my car, driving through Black Mountain,
    North Carolina, I listen to what
    sounds like Doris Day shooting
    heroin inside Sly Stone’s throat.`,

    `One would think that she fights
    to get out, but she wants to stay
    free in this skin. Fresh,
    The Family Stone’s album,`,

    `came out in ’73, but I didn’t make sense
    of it till ’76, sixth grade for me,
    the Bicentennial, I got my first kiss that year,
    I beat up the class bully; I was the man.`,

   `But for now, in my head, it’s only ’73
    and I’m a little boy again, listening
    to Sly and his Family covering Doris’s hit,
    driving down I-40;`,

   `a cop pulls me over to ask why
    I’m here, in his town, with my Yankee tags.
    I let him ask a series of questions
    about what kind of work I do,`,

    `what brings me to town—you know
    the kind of questions that tell you
    this has nothing to do with driving a car.
    My hands want to ball into fists.`,

    `But, instead, I tell myself to write a letter
    to the Chief of Police, to give him something
    to laugh at over his morning paper,
    as I try to recall the light in Doris Day’s version`,

    `of “Que Sera Sera”—without the wail
    troubling the notes in the duet
    of Sly and Cynthia’s voices.
    Hemingway meant to define
    courage by the nonchalance you exude
    while taking cover within your flesh,
    even at the risk of losing
    what some would call a melody;
    I call it the sound of home.
    Like when a song gets so far out
    on a solo you almost don’t recognize it,
    but then you get back to the hook, you suddenly`,

   ` recognize the tune and before you know it,
    you’re putting your hands together; you’re on your feet—
    because you recognize a sound, like a light,
    leading you back home to a color:`,

    `rust. You must remember
    rust—not too red, not too orange—not fire or overnight
    change, but a simmering-summer
    change in which children play till they tire`,

    `and grown folks sit till they grow edgy
    or neighborhood dogs bite those not from your neigborhood
    and someone with some sense says Down, Boy,
    or you hope someone has some sense`,

    `who’s outside or who owns the dog and then the sky
    turns rust and the streetlights buzz on
    and someone’s mother, must be yours, says
    You see those streetlights on don’t you,`,

    `and then everybody else’s mother comes out and says
    the same thing and the sky is rust so you know
    you got about ten minutes before she comes back out
    and embarrasses you in front of your friends;`,

    `ten minutes to get home before you eat and watch
    the Flip Wilson Show or Sanford and Son and it’s time for bed.
    And it’s rust you need to remember
    when the cop asks, What kind of work you do?`,

   ` It’s rust you need to remember: the smell
    of summer rain on the sidewalk
    and the patina on wrought-iron railings on your front porch
    with rust patches on them, and the smell`,

    `of fresh mowed grass and gasoline and sweat
    of your childhood as he takes a step back
    when you tell him you’re a poet teaching
    English down the road at the college,`,

   ` when he takes a step back—
    to assure you, know, that this has nothing to do with race,
    but the rust of a community he believes
    he keeps safe, and he says Have a Good One,`,

   ` meaning day as he swaggers back to his car,
    and the color of the day and the face behind sunglasses
    and the hands on his hips you’ll always remember
    come back gunmetal gray`
]

const form = document.querySelector(".lorem-form")
const amount = document.getElementById("amount")
const result = document.querySelector(".lorem-text")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random() * text.length)

    // empty, -1, > 20
    if(isNaN(value) || value <= 0 || value > 20) {
        result.innerHTML = `<p>${text[random]}</p>`
    } else {
        // with input value
        let tempText = text.slice(0, value)
        tempText = tempText.map(function(item){
            return `<p>${item}</p>`
        }).join("")
        result.innerHTML = tempText
    }
})