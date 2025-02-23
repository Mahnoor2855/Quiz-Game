
let gsQuestions = [
    "1. What is the SI unit of force?",

    "2. Which law states that 'for every action, there is an equal and oppos'",

    "3. What type of energy is stored in a stretched rubber band?",

    "4. Which fundamental force keeps planets in orbit around the Sun?",

    "5. What is the speed of light in a vacuum?",

    "6. What is the unit of electrical resistance?",

    "7. What does a convex lens do to light rays?",

    "8. What type of mirror is used in car side mirrors?",

    "9. What is the principle behind a jet engine?",

    "10. Which gas is used in fluorescent bulbs?",

    "11. What is the chemical symbol for gold?",

    "12. Which gas is responsible for the fizz in soft drinks?",

    "13. What is the pH value of pure water?",

    "14. What is the main component of natural gas?",

    "15. What is the most abundant element in the Earth’s crust?",

    "16. Which acid is found in lemons?",

    "17. What is the chemical formula of ozone?",

    "18. What is the hardest natural substance on Earth?",

    "19. Which metal is liquid at room temperature?",

    "20. Which gas is known as 'laughing gas'?",

    "21. What is the powerhouse of the cell?",

    "22. Which vitamin is produced when skin is exposed to sunlight?",

    "23. What is the longest bone in the human body?",

    "24. Which organ purifies the blood in the human body?",

    "25. What is the basic unit of life?",

    "26. Which gas do plants absorb during photosynthesis?",

    "27. What is the largest organ in the human body?",

    "28. Which blood cells help in clotting?",

    "29. What is the name of the pigment that gives skin its color?",

    "30. Which animal has the longest lifespan?",

    "31. What is the outermost layer of the Earth called?",

    "32. What is the closest planet to the Sun?",

    "33. Which gas makes up most of Earth’s atmosphere?",

    "34. Which layer of the atmosphere contains the ozone layer?",

    "35. What is a group of stars that forms a pattern called?",

    "36. What is the name of the galaxy that contains our Solar System?",

    "37. Which planet is known as the 'Red Planet'?",

    "38. What is the primary gas in the Sun?",

    "39. What is the term for a large system of stars, dust, and gas held together by gravity?",

    "40. Which celestial body has the most powerful gravity in the universe?"

 ]

var allbox = document.getElementsByClassName('box')

//console.log(console.log(gsQuestions[1])
console.log(Math.floor(Math.random()*40))

for (var i = 0; i < allbox.length; i++) {
    allbox[i].addEventListener('click', function () {
        clearAll()
        this.style.backgroundColor = '#fff'
        this.style.color = '#000'
        this.style.fontSize = '25px'
        this.innerText = gsQuestions[Math.floor(Math.random()*40)]

    })
}

    function clearAll () {
       // console.log('this---->', this)
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].style.backgroundColor = '#000'
            allbox[i].style.color = '#fff'
            allbox[i].innerText = i + 1
        
        }
    }


    function flipCard(card) {
        card.classlist.toggle("flipped");
    }
