class Account {
    constructor( id, type) {
        this.id = id;
        this.type = type;
        this.cLines = []; // lignes de crédits qui sera la liste des montants crédités
        this.dLines = []; // lignes de débits qui sera la liste des montants débits    
    }
    
    calculateBalance () {
        if (this.type === "D") {
            let creditSum = 0;
            let debitSum = 0;
        
            // calcul de la somme des crédits
            for (let i = 0; i < this.cLines.length; i++) {
                creditSum += this.cLines[i];
            }
        
            // calcul de la somme des débits
            for (let i = 0; i < this.dLines.length; i++) {
                debitSum += this.dLines[i];           
            }
        
            // Différence entre la somme des débits et la somme des crédits pour un compte de type D 
            return debitSum - creditSum;
        
        } else if (this.type === "C") {
            let creditSum = 0;
            let debitSum = 0;
        
            // calcul de la somme des crédits
            for (let i = 0; i < this.cLines.length; i++) {
                creditSum += this.cLines[i];
            }
        
            // calcul de la somme des débits
            for (let i = 0; i < this.dLines.length; i++) {
                debitSum += this.dLines[i];           
            }
        
            // Différence entre la somme des débits et la somme des crédits pour un compte de type C
            return creditSum - debitSum 
        }
    }
}
    
    
class Agent {
    constructor() {
        this.accounts = {
            cash: new Account(10, "D"),
            inventaire: new Account(11, "D"),
            emprunt: new Account(20, "C"),
            capital: new Account(30, "C"),
            vente: new Account(40, "C"),
            achat: new Account(50, "C"),
            cout: new Account(51, "C"),
        };
        this.transactions = [];
    }

    makeTransaction (source, destination, amount) {
        source.cLines.push(amount);
        destination.dLines.push(amount);

        this.transactions.push({ // ajoute une transaction à la liste des transactions
            date: new Date().toISOString().substring(0, 10),
            source,
            destination,
        })
    }

    resultat(revenus, depenses){
        return revenus + depenses
    }
    
    bilanComptable(cash, inventaire, emprunt, capital, resultat){
        let bilanType1 = cash + inventaire
        let bilanType2 = emprunt
        let bilanType3 = capital
        let bilanDroite = bilanType2 + bilanType3 + resultat

        return {
            bilan1: bilanType1,
            bilan2: bilanDroite,
        }
    }
}


const agent1 = new Agent(); 

agent1.makeTransaction(agent1.accounts.capital, agent1.accounts.cash, 1000); // Première transaction
agent1.makeTransaction(agent1.accounts.cash, agent1.accounts.achat, 50); // Deuxième transaction
agent1.makeTransaction(agent1.accounts.achat, agent1.accounts.inventaire, 50); // Troisième transaction
agent1.makeTransaction(agent1.accounts.inventaire, agent1.accounts.cout, 50); // Quatrième transaction
agent1.makeTransaction(agent1.accounts.vente, agent1.accounts.cash, 80); // Cinquième transaction

let revenus = parseInt(agent1.accounts.vente.calculateBalance())
let depenses = parseInt(agent1.accounts.cout.calculateBalance())
let cash = parseInt(agent1.accounts.cash.calculateBalance())
let inventaire = parseInt(agent1.accounts.inventaire.calculateBalance())
let emprunt = parseInt(agent1.accounts.emprunt.calculateBalance())
let capital = parseInt(agent1.accounts.capital.calculateBalance())

let resultat = parseInt(agent1.resultat(revenus, depenses))
let bilanComptable = agent1.bilanComptable(cash, inventaire, emprunt, capital, resultat)
let bilanGaucheEgalite = bilanComptable.bilan1
let bilanDroiteEgalite = bilanComptable.bilan2

console.log("Liste des transactions :")
agent1.transactions.forEach(transaction => console.log(transaction))
console.log("Résultat : "+resultat)
console.log("Bilan : "+bilanGaucheEgalite+' = '+bilanDroiteEgalite)