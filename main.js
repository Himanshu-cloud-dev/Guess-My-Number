'use strict'

let randomNumber =  Math.trunc(Math.random() * 19 + 1);
const startEndNumber = {
    start: 0, end: 20,
    endNumber: 20,
    endDesign: [`💯 Attempt Left: ` , `🎖️ HighScore :`],
    userValue: undefined,
    decision: undefined,
    backgroundColor: [],
    mantainedHighScore : [0]
}
const victoryBoard = document.querySelector('.changeMessage');
const guessingHelper = document.querySelector('.message');
const highScore = document.querySelector('.HighScore');
const inputBox = document.querySelector('.user');
const checkButton = document.getElementsByClassName('submit');
const number = document.querySelector('.number');

document.querySelector('.submit').addEventListener('click', function () {
    startEndNumber.userValue = document.querySelector('.user').value
    if (!startEndNumber.userValue)
        guessingHelper.textContent = '🤔 What Happen, Please play Game..';
    else if (startEndNumber.userValue <= startEndNumber.start || startEndNumber.userValue > startEndNumber.end)
        guessingHelper.textContent = '😕 select Number Between 1 and 20';
    else if (startEndNumber.decision) {
        if (startEndNumber.decision === '🥺 You Lose!') victoryBoard.textContent = `💁 You Lose! 🥺 this match ,To Play Again click Above replay Button..`
        else victoryBoard.textContent = `💁 You Win This Stage 😃, To Play Again click Above replay Button..`
    }
    else gameLogic();
})


function gameLogic() {
    if (startEndNumber.userValue < randomNumber && startEndNumber.endNumber >= 1) {
        startEndNumber.endNumber--;
        guessingHelper.textContent = '📉 Low!';
        document.querySelector('.score').textContent = startEndNumber.endDesign[0] + startEndNumber.endNumber;

    } else if (startEndNumber.userValue > randomNumber && startEndNumber.endNumber >= 1) {
        startEndNumber.endNumber--;
        guessingHelper.textContent = '📈 High!';
        document.querySelector('.score').textContent = startEndNumber.endDesign[0] + startEndNumber.endNumber;
    }
    else if (startEndNumber.endNumber === 0) {
        victoryBoard.textContent = '🥺 You Lose! correct number mentioned below..';
        startEndNumber.decision = '🥺 You Lose!';
        number.textContent = randomNumber;
        startEndNumber.backgroundColor.push('#ff0202a8')
        document.body.style.backgroundColor = startEndNumber.backgroundColor[0]
        startEndNumber.backgroundColor.pop();
    }
    else {
        guessingHelper.textContent = '✅ Correct Number.';
        victoryBoard.textContent = `😃 You Win! in ${startEndNumber.end - startEndNumber.endNumber} Attempt.`;
        startEndNumber.decision = '✅ Correct Number.';
        number.textContent = randomNumber;
        startEndNumber.backgroundColor.push('green')
        document.body.style.backgroundColor = startEndNumber.backgroundColor[0];
        startEndNumber.backgroundColor.pop();
            if (!startEndNumber.mantainedHighScore[0]){
                startEndNumber.mantainedHighScore.pop();
                startEndNumber.mantainedHighScore.push(startEndNumber.endNumber);
                highScore.textContent = startEndNumber.endDesign[1] + startEndNumber.mantainedHighScore
            } else if (startEndNumber.mantainedHighScore[0] < startEndNumber.endNumber ){
                startEndNumber.mantainedHighScore.pop();
                startEndNumber.mantainedHighScore.push(startEndNumber.endNumber);
                highScore.textContent = startEndNumber.endDesign[1] + startEndNumber.mantainedHighScore
            }
            else highScore.textContent = startEndNumber.endDesign[1] + startEndNumber.mantainedHighScore
    };
}

document.querySelector('.refresh').addEventListener('click', function () {
    startEndNumber.endNumber = 20;
    startEndNumber.backgroundColor.push('#1f1f1f')
    document.body.style.backgroundColor = startEndNumber.backgroundColor[0];
    startEndNumber.backgroundColor.pop();
    guessingHelper.textContent = 'Start Guessing 🤔';
    victoryBoard.textContent = 'Guess Number 🤔';
    document.querySelector('.score').textContent = startEndNumber.endDesign[0] + startEndNumber.endNumber;
    number.textContent = '❓';
    startEndNumber.userValue = undefined ;
    startEndNumber.decision = undefined;
    randomNumber = Math.trunc(Math.random() * 19 + 1);
})

