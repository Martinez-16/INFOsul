import input from 'readline-sync'
var times = 5

let time1 = input.question('Nome do time 1: ')
let time2 = input.question('Nome do time 2: ')
let time3 = input.question('Nome do time 3: ')
let time4 = input.question('Nome do time 4: ')
let time5 = input.question('Nome do time 5: ')

let pt1 = Number(input.questionInt('Pontos do time 1: '))
let pt2 = Number(input.questionInt('Pontos do time 2: '))
let pt3 = Number(input.questionInt('Pontos do time 3: '))
let pt4 = Number(input.questionInt('Pontos do time 4: '))
let pt5 = Number(input.questionInt('Pontos do time 5: '))

if( pt1 > pt2 && pt1>pt3 && pt1>pt4 && pt1>pt5)
    console.log("Time campeão: " + time1)

else if(pt2>pt3 && pt2>pt4 && pt2>pt5 && pt2>pt1)
    console.log("Time campeão: " + time2)

else if(pt3>pt2 && pt3>pt1 && pt3>pt4 && pt3>pt5)
    console.log("Time campeão: " + time3)

else if(pt4>pt2 && pt4>pt3 && pt4>pt1 && pt4>pt5)
    console.log("Time campeão: " + time4)

else if(pt5>pt2 && pt5>pt3 && pt5>pt4 && pt5>pt1)
    console.log("Time campeão: " + time5)
