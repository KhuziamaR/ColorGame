let numSquares=6;
let colors = generateRandomColors(numSquares);
let squares= document.querySelectorAll(".square");
let pickedColor= pickColor();
let messageDisplay=document.querySelector("#message");
let colorDisplayRGB=document.getElementsByTagName("span")[0];
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let h1 = document.querySelector("h1");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function reset()
{
    colors=generateRandomColors(numSquares);
    resetButton.textContent="New Colors"
    messageDisplay.textContent="";
    pickedColor=pickColor();

    colorDisplayRGB.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else 
        {
            squares[i].style.display="none";
        }
     
    }
    h1.style.backgroundColor="steelblue";
}



resetButton.addEventListener("click",function()
{

    reset();
})

function changeColors(color)
{
    for(let i =0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    let rand=Math.floor(Math.random()*colors.length)
    return colors[rand];
}

function generateRandomColors(num)
{
    // make array 
    let arr= [];
    // repeat num times 
    for (let i=0;i<num;i++){
    // get random color and push into arr 
    arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    //pick red 
    let r=Math.floor(Math.random()*256);
    //pick green
    let g=Math.floor(Math.random()*256);
    //pick blue
    let b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}
function setupModeButtons()
{
    for(let i=0; i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3: numSquares =6;
            reset();
        });
    }
}
function setupSquares()
{
    for(let i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        
        squares[i].addEventListener("click",function()
        {
            let clickedColor = this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
                h1.style.backgroundColor=pickedColor;
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                resetButton.textContent="Play Again?";
            }
            else
            {
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }})
        }
}