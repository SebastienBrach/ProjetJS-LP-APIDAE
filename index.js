class Agent {
    constructor(name){
        this.name=name
    }   
	
	// liste de compte
	// liste de ligne de compte
    // il s'occupe des transactions
    
    //parcourir les comptes, et calculer les bilans
	bilan()	{
    }
    
    effectuerTransaction(){
        
    }
}

class Account {
    constructor(numero, nom, categorie) {
        this.numero = numero
        this.nom = nom
        this.categorie = categorie
    }
}

class LigneDeCompte{
    constructor(credit, debit){
        this.credit = credit
        this.debit = debit
    }
	
}

class Transaction {
    constructor(compteDebite, compteCredite) {
        this.compteDebite = compteDebite
        this.compteCredite = compteCredite
    }
	
	// elle prend en paramètre le compte ou l'argent sera débité, et le compte ou l'argent sera créditée
}

// let agent = new Agent("Sébastien")
// console.log("Bilan : "+agent.bilan)

let compte1 = new Account(1, 'Cash', 'D')
let compte2 = new Account(2, 'Emprunt', 'C')
let compte3 = new Account(3, 'Capital', 'C')
let compte4 = new Account(4, 'Vente', 'C')
let compte5 = new Account(5, 'Achat', 'C')

let compte = [compte1,compte2,compte3,compte4,compte5]

console.log(compte)


  










































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