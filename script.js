document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');

    // Movement of the ball
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = getComputedStyle(ball);
        const ballLeft = parseInt(ballStyle.left);
        const ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                ball.style.top = (ballTop - 10) + xp
                break;
            case 'ArrowDown':
                ball.style.top = (ballTop + 10) + xp
                break;
            case 'ArrowLeft':
                ball.style.left = (ballLeft - 10) + xp
                break;
            case 'ArrowRight':
                ball.style.left = (ballLeft + 10) + xp
                break;
        }
        ball.style.left = ballLeft + 'px';
        ball.style.top = ballTop + 'px';
        
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
