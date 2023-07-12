function part3(yeardaynumber, hournumber)
{
let day = getDayNumber(0, yeardaynumber);
return businesshours(day, hournumber);
}
console.log(part3(72,17));