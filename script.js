const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };
let team=players;
let team1=[];
for (let i = 0; i < players.length; i++) {
    team1[i]=players[i];
};

let cap1={};
for(let key in person){
	team1[key]=person[key];
	team1[key]=person[key];
}

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement


export {players,person,team,team1,cap1}
