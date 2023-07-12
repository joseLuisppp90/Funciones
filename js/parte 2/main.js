function getDayNumber(janfirstDay, yeardaynumber){
  
return (yeardaynumber-1)%7;
}
console.log(getDayNumber(0,91));
