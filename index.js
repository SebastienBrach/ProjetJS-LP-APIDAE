class Agent {
    constructor(name){
        this.name=name
    }   
	
	// liste de compte
	// liste de ligne de compte
	// il s'occupe des transactions
	
	function bilan()
	{
		//parcourir les comptes, et calculer les bilans
	}

class Account {
    constructor(agent, numero, nom, categorie) {
        this.agent = agent
        this.numero = numero
        this.nom = nom
        this.categorie = categorie
    }
}

class LigneDeCompte{
	
}


class Transaction {
    constructor() {
    }
	
	// elle prend en paramètre le compte ou l'argent sera débité, et le compte ou l'argent sera créditée
}
let agent = new Agent("Sébastien")
let account1 = new Account(agent.name, 01, "Cash","D")
let account2 = new Account(agent.name, 02, "Emprunt","C")
let account3 = new Account(agent.name, 03, "Capital","C")
let account4 = new Account(agent.name, 04, "Vente","C")
let account5 = new Account(agent.name, 05, "Achat","C")

console.log(account1)
console.log(account2)   










































//code de camille
// class Agent{
//     constructor(){
//       this.accounts = [];
//       this.createAccount(1, 'Cash');
//     }
//     ...
//     printData(){
//       for(let element in this.accounts){
//         console.log(this.accounts[element].toString());
//       }
    
//   }
//   class Account{
//     constructor(name = 'defaultValue'){
//       this.name = name;
//     }
  
//     toString(){
//       return this.name;
//     }
//   }
  
  
  
//   a1 = new Agent()
//   a1.printData()