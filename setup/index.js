//Implementing the method that changes the background color
document.getElementById('cardBackgroundColor').oninput=function(){
    var el=document.getElementById('cardBackgroundColor');
    var col=el.style.backgroundColor;
    alert(rgbToHex(col));
};
//Changing theme
const darkthemeCheckbox=document.getElementById('darkTheme');
const cards=document.getElementById('container');
darkthemeCheckbox.addEventListener('change',()->
if(darkthemeCheckbox.checked){
    cards.classList.add('dark-theme');}
else {
    cards.classList.remove('dark-theme');
});

//Changing space gap
const input=document.getElementById('cardSpaceBetween');

input.addEventListener("input",updateGap);

function updateGap(){
    const inputLength=input.value.length;
    const maxInputL= input.maxLength;
    const progressValue=(inputLength/maxInputL)*100;
    input.value=progressValue;
}

//Widget sizes
const widget= document.getElementById("layout-placeholder");
var numberCol=3;

function WidgetSize(){
    if(window.innerWidth<992){
        numberCol=2;
    }
    else if (window.innerWidth<767){
        numberCol=1;
    }

    const postWidthOfWidget=100/numberCol;
    widget.style.setProperty('--postwidth','${postWidthofWidget}');

    window.addEventListener('resize',WidgetSize);
    WidgetSize();
}