<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ball Game</title>
<style>
    #game-container {
        width: 400px;
        height: 400px;
        border: 2px solid black;
        position: relative;
    }
    #ball {
        width: 20px;
        height: 20px;
        background-color: red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #goal {
        width: 30px;
        height: 30px;
        background-color: green;
        position: absolute;
    }
</style>
</head>
<body>

<div id="game-container">
    <div id="ball"></div>
    <div id="goal"></div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const gameContainer = document.getElementById('game-container');
    let goal = document.getElementById('goal');

    // Movement of the ball
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = getComputedStyle(ball);
        const ballLeft = parseInt(ballStyle.left);
        const ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                ball.style.top = (ballTop - 10) + 'px';
                break;
            case 'ArrowDown':
                ball.style.top = (ballTop + 10) + 'px';
                break;
            case 'ArrowLeft':
                ball.style.left = (ballLeft - 10) + 'px';
                break;
            case 'ArrowRight':
                ball.style.left = (ballLeft + 10) + 'px';
                break;
        }
        // Check win condition
        if (checkCollision(ball, goal)) {
            alert('Congratulations! You won!');
            resetGoalPosition();
        }
    });

    // Check if the ball reaches the goal
    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left || 
                 ballRect.left > goalRect.right || 
                 ballRect.bottom < goalRect.top || 
                 ballRect.top > goalRect.bottom);
    }

    // Function to reset goal position
    function resetGoalPosition() {
        const containerRect = gameContainer.getBoundingClientRect();
        const randomLeft = Math.random() * (containerRect.width - goal.offsetWidth);
        const randomTop = Math.random() * (containerRect.height - goal.offsetHeight);
        goal.style.left = randomLeft + 'px';
        goal.style.top = randomTop + 'px';
    }

    // Call resetGoalPosition after the goal element is defined
    resetGoalPosition();
});
</script>

</body>
</html>

