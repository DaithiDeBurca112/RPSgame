


function generateComputerChoice(){
	var myArray = ["rock","paper","scissors"];

	const computerChoice = myArray[Math.floor(Math.random()*myArray.length)];

	return(computerChoice)

}


function playGame(userChoice){ computerChoice = generateComputerChoice()
	

	if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock')||(userChoice == 'scissors' && computerChoice == 'paper')) {

        alert("You won that round");

		}
		else if ((userChoice == 'scissors' && computerChoice =='rock') || (userChoice == 'rock' && computerChoice == 'paper')||(userChoice = 'paper' && computerChoice == 'scissors')){

        			alert("you lost this round");

    		}
			else if ((userChoice == 'scissors' && computerChoice == 'scissors') || (userChoice == 'rock' && computerChoice == 'rock')||(userChoice == 'paper' && computerChoice == 'paper')){

    					alert("Its a draw");
		}
}

