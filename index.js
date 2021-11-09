let moneys = 0;
let levels = 1;
let level = document.querySelector('.level');
let money = document.querySelector('.money');
level.textContent = levels;

const content = document.querySelector('.content').onclick = ()=>{
  money.textContent = moneys += 1 * levels;
}
const upgrade = document.querySelector('.upgrade').onclick = ()=>{
  if(moneys >= 30){
    moneys -= 30;
    money.textContent = moneys;
    level.textContent = levels += 1;
  }

}