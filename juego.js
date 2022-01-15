//1era pregunta 
const LIMIT_X = 300;
const LIMIT_Y = 200;
window.addEventListener("load", ()=>{
const btn = document.querySelector('.loco');

btn.addEventListener('click', ()=>{
    alert('INCORRECTO');
});

btn.addEventListener('mouseover', moveButton);

function moveButton(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let newX, newY;
    do{
    newX = Math.random() * LIMIT_X;
    newY = Math.random() * LIMIT_Y;
    
    } while(isMouseOverButton(mouseX, mouseY, newX, newY));
    btn.style.top= newY + "px";
    btn.style.left= newX + "px";
}

function isMouseOverButton(mX,mY, x, y) {
    const rect = btn.getBoundingClientRect();
    const conflict = (mX > x && mY < (x + rect.width) &&
        mY > y && mY < (y + rect.height));
    if (conflict) { console.log("Sigue participando"); }
    return conflict;
}
});

//2da pregunta
const LIMIT_X1 = 300;
const LIMIT_Y1 = 200;
window.addEventListener("load", ()=>{
const btn1 = document.querySelector('.loca');

btn1.addEventListener('click', ()=>{
    alert('No se vale');
});

btn1.addEventListener('mouseover', moveButton);

function moveButton(e){
    const mouseX1 = e.clientX1;
    const mouseY1 = e.clientY1;
    let newX1, newY1;
    do{
    newX1 = Math.random() * LIMIT_X1;
    newY1 = Math.random() * LIMIT_Y1;
    
    } while(isMouseOverButton(mouseX1, mouseY1, newX1, newY1));
    btn1.style.top= newY1 + "px";
    btn1.style.left= newX1 + "px";
}

function isMouseOverButton(mX1,mY1, x1, y1) {
    const rect1 = btn1.getBoundingClientRect();
    const conflict = (mX1 > x1 && mY1 < (x1 + rect1.width) &&
        mY1 > y1 && mY1 < (y1 + rect.height));
    if (conflict) { console.log("Mal, mal, mal..."); }
    return conflict;
}
});

//3era pregunta
const LIMIT_X2 = 300;
const LIMIT_Y2 = 200;
window.addEventListener("load", ()=>{
const btn2 = document.querySelector('.loquita');

btn2.addEventListener('click', ()=>{
    alert('No se vale');
});

btn2.addEventListener('mouseover', moveButton);

function moveButton(e){
    const mouseX2 = e.clientX1;
    const mouseY2 = e.clientY1;
    let newX2, newY2;
    do{
    newX2 = Math.random() * LIMIT_X1;
    newY2 = Math.random() * LIMIT_Y1;
    
    } while(isMouseOverButton(mouseX2, mouseY2, newX2, newY2));
    btn2.style.top= newY2 + "px";
    btn2.style.left= newX2 + "px";
}

function isMouseOverButton(mX2,mY2, x2, y2) {
    const rect = btn2.getBoundingClientRect();
    const conflict = (mX2 > x2 && mY2 < (x2 + rect.width) &&
        mY2 > y2 && mY2 < (y1 + rect.height));
    if (conflict) { console.log("No me vas a atrapar"); }
    return conflict;
}
});

function si(){
    alert("Excelente respuesta");
}

function si1(){
    alert("¡Excelente, sigue así!");
}

function ultima(){
    alert("Es la mejor decisión");
}
