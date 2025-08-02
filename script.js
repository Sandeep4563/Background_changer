const container=document.querySelector('.container')
const random_color = document.querySelector('.random_color');
const apply_color = document.querySelector('.apply_color');
const colorInput = document.querySelector("#colorInput");
const currentColorValue = document.querySelector(".currentColorValue");
const flicker = document.querySelector(".flicker");



const colorChange = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText=color;
}

const applyColor=()=>{
    const color=colorInput.value;
    colorChange(color)
}

function getRandomColor() {
    
   
    let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
 colorChange(color);

}
   

let j = 0;

function changeColors() {
  if (j < 100) {
    let color = getRandomColor();
    colorChange(color);
    setTimeout(changeColors, 15);
    j++;
  } else {
    j = 0;
  }
}







apply_color.addEventListener('click',applyColor);

random_color.addEventListener("click",getRandomColor);

flicker.addEventListener("click", changeColors);

